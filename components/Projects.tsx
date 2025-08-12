import GithubRepos from "./GithubRepos";

export default function Projects() {
  return (
    <section id="projetos" className="container">
      <div className="section-title">
        <h2>Meus projetos</h2>
        <p>Tecnologias: React, React Native, Next.JS, Typescript, N8N e integrações via API.</p>
      </div>

      <h3 style={{ margin: "6px 0 14px" }}>Desenvolvedor</h3>
      <div className="grid cols-3">
        {[
          ["Website Faculdade FAZAG", "Next.JS • Prismic"],
          ["Aplicativo Faculdade FAZAG", "React Native"],
          ["Landing Page Matrículas FAZAG", "Next.JS"],
          ["Website Motiva Bolsas", "Next.JS"],
          ["Website Faculdade Farvalle", "Next.JS"],
        ].map(([title, tag]) => (
          <article key={title as string} className="project card">
            <div className="meta"><strong>{title}</strong><span className="tag">{tag}</span></div>
          </article>
        ))}
      </div>

      <h3 style={{ margin: "26px 0 10px" }}>Do GitHub</h3>
      <p className="tag">Últimos repositórios públicos (ordenados pelos mais recentes)</p>
      {/* @ts-expect error Async Server Component */}
      <GithubRepos />

      <h3 id="audio-visual" style={{ margin: "26px 0 10px" }}>Áudio Visual</h3>
      <p className="tag">Confira algumas das minhas produções no Instagram</p>
      <div className="grid cols-3">
        {["DNBnc_cuJgg", "DKVTGaISIyP", "DI1PkbIM92i"].map((slug) => (
          <div className="card" key={slug}>
            <blockquote className="instagram-media" data-instgrm-permalink={`https://www.instagram.com/p/${slug}/`} data-instgrm-version="14" />
          </div>
        ))}
      </div>

      <h3 style={{ margin: "26px 0 10px" }}>Social Media</h3>
      <p className="tag">Confira algumas das minhas produções no Instagram</p>
      <div className="grid cols-3">
        {["DHHJkt-yVNP", "DIEQ0yUR-SC", "DHdXwTROdQm"].map((slug) => (
          <div className="card" key={slug}>
            <blockquote className="instagram-media" data-instgrm-permalink={`https://www.instagram.com/p/${slug}/`} data-instgrm-version="14" />
          </div>
        ))}
      </div>
    </section>
  );
}