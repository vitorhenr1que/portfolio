export default function Testimonials() {
  const items = [
    { name: "Ana Souza", role: "CMO, TechX", initial: "A", text: "O Vitor elevou nossa presença digital em semanas. A landing dobrou a taxa de conversão." },
    { name: "Marcos Lima", role: "Founder, GreenShop", initial: "M", text: "Velocidade absurda e SEO redondo. Nosso tráfego orgânico cresceu 120%." },
    { name: "Clara Nunes", role: "Head de Produto", initial: "C", text: "Excelente comunicação e entrega. O dashboard economiza horas da nossa equipe." },
  ];
  return (
    <section id="depoimentos" className="container">
      <div className="section-title">
        <h2>Clientes satisfeitos, resultados reais</h2>
        <p>Mais do que sites bonitos: narrativas que convertem, métricas que comprovam.</p>
      </div>
      <div className="testimonials">
        {items.map((q) => (
          <div key={q.name} className="quote">
            <div className="author">
              <div className="avatar">{q.initial}</div>
              <div><strong>{q.name}</strong><br /><span className="tag">{q.role}</span></div>
            </div>
            <p>“{q.text}”</p>
          </div>
        ))}
      </div>
    </section>
  );
}