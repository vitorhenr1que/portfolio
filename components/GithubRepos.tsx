import Link from "next/link";

interface GithubRepo {
  id: number;
  name: string;
  language: string | null;
  description: string | null;
  homepage: string | null;
  html_url: string;
  fork: boolean;
  archived: boolean;
  pushed_at: string;
}

export default async function GithubRepos() {
  const user = process.env.GITHUB_USER ?? "vitorhenr1que";
  const token = process.env.GITHUB_TOKEN;

  const res = await fetch(
    `https://api.github.com/users/${user}/repos?per_page=100&sort=updated`,
    {
      headers: token ? { Authorization: `token ${token}` } : undefined,
      next: { revalidate: 60 * 60 },
    }
  );

  if (!res.ok) {
    return (
      <div className="card">
        <p>Não foi possível carregar os repositórios agora. Tente novamente mais tarde.</p>
      </div>
    );
  }

  const all: GithubRepo[] = await res.json();
  const repos = all
    .filter(r => !r.fork && !r.archived)
    .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
    .slice(0, 9);

  if (repos.length === 0) {
    return (
      <div className="card">
        <p>Nenhum repositório público encontrado.</p>
      </div>
    );
  }

  return (
    <div className="grid cols-3">
      {repos.map((r) => (
        <article key={r.id} className="project card">
          <div className="meta">
            <strong>{r.name}</strong>
            <span className="tag">
              {`${r.language ?? "—"} • Atualizado ${new Date(r.pushed_at).toLocaleDateString("pt-BR")}`}
            </span>
          </div>
          <p style={{ margin: "4px 0 8px" }}>
            {r.description ?? "Projeto público no GitHub."}
          </p>
          <div className="actions">
            <Link
              className="btn btn-outline"
              href={(r.homepage && r.homepage.trim()) ? r.homepage : r.html_url}
              target="_blank"
            >
              {r.homepage ? "Ver projeto" : "Ver repositório"}
            </Link>
            <Link
              className="btn btn-primary"
              href={r.html_url}
              target="_blank"
            >
              Código
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}