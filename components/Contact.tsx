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
          <p><strong>E‑mail:</strong> <a href="mailto:contato@vhpsantos@gmail.com">vhpsantos@gmail.com</a></p>
          <p><strong>WhatsApp:</strong> <a href="https://wa.me/5575981197497?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento." target="_blank" rel="noopener">(75) 98119-7497</a></p>
          <div className="socials" style={{ marginTop: 10 }}>
            <a href="https://github.com/vitorhenr1que" target="_blank" aria-label="GitHub">GitHub</a>
            <a href="https://www.linkedin.com/in/vitor-henrique-130b46159/" aria-label="LinkedIn">LinkedIn</a>
            <a href="https://www.instagram.com/vitor_henr1que/" aria-label="Instagram">Instagram</a>
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