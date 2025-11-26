import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Programs } from "../components/Programs";
import { Resources } from "../components/Resources";
import { GetInvolved } from "../components/GetInvolved";
import { Footer } from "../components/Footer";

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Programs />
      <Resources />
      <GetInvolved />
      <Footer />
    </>
  );
}
