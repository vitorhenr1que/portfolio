import Topbar from "../components/Topbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import About from "../components/About";
import Contact from "../components/Contact";
import Effects from "./(components-client)/Effects";
import InstagramEmbeds from "./(components-client)/InstagramEmbeds";

export default function Page() {
  return (
    <main>
      <Topbar />
      <Hero />
      {/* <section className="container">
        Espaço reservado para métricas extras 
      </section>*/}
      <Services />
      <Projects />
      <Testimonials />
      <CTA />
      <About />
      <Contact />
      {/* Scripts e efeitos client-side */}
      <Effects />
      <InstagramEmbeds />
    </main>
  );
}