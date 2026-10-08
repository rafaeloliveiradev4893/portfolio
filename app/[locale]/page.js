import About from "@/components/about";
import Contact from "@/components/contact";
import Services from "@/components/services";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Cursor from "@/components/cursor";

export default async function Home() {

  return (
    <main>
      <Cursor/>
      <Header/>
      <div className="mx-auto w-full max-w-400">
        <Hero/>
        <Projects/>
        <About/>
        <Services/>
        <Contact/>
      </div>
    </main>
  );
}
