import Link from "next/link";
import ThemeToggle from "@/app/(components-client)/ThemeToggle";

export default function Topbar() {
  return (
    <header className="topbar container">
      <Link href="#" className="brand" aria-label="Ir para o topo">
        <span className="logo" aria-hidden="true" />
        <span>
          Vitor <span style={{ color: "var(--primary)" }}>Henrique</span>
        </span>
      </Link>
      <nav className="nav" aria-label="Navegação principal">
        <Link href="#projetos">Projetos</Link>
        <Link href="#servicos">Serviços</Link>
        <Link href="#depoimentos">Depoimentos</Link>
        <Link href="#contato">Contato</Link>
      </nav>
      <div className="actions">
        <ThemeToggle />
        <Link className="btn btn-primary" href="#contato">Entre em contato</Link>
      </div>
    </header>
  );
}