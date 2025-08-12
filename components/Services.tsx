export default function Services() {
  return (
    <section id="servicos" className="container">
      <div className="section-title">
        <h2>Serviços que entregam resultado</h2>
        <p>
          Landing Page de Alta Conversão, Sites Institucionais, Aplicações Web, Loja Online, Otimização de SEO, Manutenção & Suporte, Áudio Visual, Estrategista de Conteúdo (Social Media), Tráfego Pago.
        </p>
      </div>
      <div className="grid cols-3">
        {[
          ["Landing Page de Alta Conversão", "Copy persuasiva, design focado em conversão e testes A/B para capturar leads."],
          ["Sites Institucionais", "Presença profissional, rápida e acessível, com CMS para fácil edição."],
          ["Aplicações Web", "Apps e dashboards escaláveis com arquitetura moderna."],
          ["Agente de IA e Automação", "Atendimento barato de forma rápida e precisa, 24 horas por dia e treinado da forma que você quer."],
          ["Otimização de SEO", "Técnico e on‑page para ranquear no Google e acelerar páginas."],
          ["Manutenção & Suporte", "Monitoramento, correções e melhorias contínuas."],
          ["Áudio Visual", "Captação, edição e motion para vídeos que engajam e vendem."],
          ["Estrategista de Conteúdo (Social Media)", "Calendário editorial, roteiros e criativos para crescer nas redes."],
          ["Tráfego Pago", "Gestão de anúncios (Meta/Google) orientada a ROI."],
        ].map(([title, desc]) => (
          <div key={title as string} className="card">
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}