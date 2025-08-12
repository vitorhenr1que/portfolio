export default function About() {
  return (
    <section id="sobre" className="container">
      <div className="section-title">
        <h2>Sobre mim</h2>
        <p>Desenvolvedor com foco em criar experiências web que unem estética, performance e conversão.</p>
      </div>
      <div className="grid cols-2">
        <div className="card">
          <h3>Abordagem</h3>
          <p>Trabalho em ciclos curtos, com checkpoints claros. Valido hipóteses cedo para evitar desperdícios e maximizar ROI.</p>
        </div>
        <div className="card">
          <h3>Pilares</h3>
          <p>Design centrado no usuário, código limpo, SEO técnico e mensuração constante com dados reais.</p>
        </div>
      </div>
    </section>
  );
}