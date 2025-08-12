"use client";
import { useState } from "react";

export default function Contact() {
  const [year] = useState(() => new Date().getFullYear());

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nome = encodeURIComponent(String(data.get("nome") ?? ""));
    const email = encodeURIComponent(String(data.get("email") ?? ""));
    const assunto = encodeURIComponent(String(data.get("assunto") ?? ""));
    const mensagem = encodeURIComponent(String(data.get("mensagem") ?? ""));
    const body = `Nome: ${nome}%0AEmail: ${email}%0A%0A${mensagem}`;
    window.location.href = `mailto:contato@vitorhenrique.dev?subject=${assunto}&body=${body}`;
  }

  return (
    <section id="contato" className="container">
      <div className="section-title">
        <h2>Vamos conversar?</h2>
        <p>Conte seu projeto em poucas palavras e receba uma proposta personalizada.</p>
      </div>
      <div className="contact">
        <form className="form" onSubmit={onSubmit} id="contactForm">
          <input className="input" type="text" name="nome" placeholder="Seu nome" required />
          <input className="input" type="email" name="email" placeholder="Seu e‑mail" required />
          <input className="input" type="text" name="assunto" placeholder="Assunto" required />
          <textarea className="input" name="mensagem" placeholder="Descreva seu projeto" required />
          <button className="btn btn-primary" type="submit">Enviar mensagem</button>
          <small style={{ color: "var(--muted)" }}>Sem spam, prometo. Responderei em até 24h úteis.</small>
        </form>
        <div className="card">
          <h3>Outros canais</h3>
          <p><strong>E‑mail:</strong> <a href="mailto:contato@vitorhenrique.dev">contato@vitorhenrique.dev</a></p>
          <p><strong>WhatsApp:</strong> <a href="https://wa.me/5500000000000" target="_blank" rel="noopener">(00) 00000‑0000</a></p>
          <div className="socials" style={{ marginTop: 10 }}>
            <a href="#" aria-label="GitHub">GitHub</a>
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
            <a href="#" aria-label="Instagram">Instagram</a>
          </div>
        </div>
      </div>
      <footer>
        <div className="container footer-grid">
          <div>© <span>{year}</span> Vitor Henrique. Todos os direitos reservados.</div>
          <div className="socials">
            <a href="#">Termos</a>
            <a href="#">Privacidade</a>
          </div>
        </div>
      </footer>
      <div className="float-cta">
        <a className="btn btn-primary" href="#contato">📩 Fale comigo</a>
      </div>
    </section>
  );
}