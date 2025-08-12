import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid container">
        <div>
          <span className="eyebrow">Desenvolvedor Web Full‑Stack e IA</span>
          <h1>
            Crio <span className="highlight">sites e apps</span> rápidos, responsivos e voltados para conversão.
          </h1>
          <p className="subhead">
            Profissionalizo sua presença nas redes sociais, desenvolvo sites e crio conteúdo audiovisual que conecta. Precisa de um site ou melhorar suas redes sociais? Vamos conversar.
          </p>
          <div className="badges" aria-label="Provas sociais e conquistas">
            <span className="badge">⚡ Performance A+</span>
            <span className="badge">🛡️ SEO & Acessibilidade</span>
            <span className="badge">🚀 Entrega Rápida</span>
          </div>
          <div className="actions">
            <a className="btn btn-primary" href="#contato">Solicitar orçamento</a>
            <a className="btn btn-outline" href="#projetos">Ver projetos</a>
          </div>
        </div>
        <div className="hero-media">
          <Image src="/vitor.png" alt="Foto profissional (PNG transparente)" className="profile-photo" width={500} height={500} priority />
          <div className="div-hero-down">
            <div className="marquee">
            <span>Social Media ● Audio Visual ● Sites ● Tráfego Pago ● Agentes de IA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}