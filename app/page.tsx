import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import {
  About,
  Work,
  Skills,
  Experience,
  Contact,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
