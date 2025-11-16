import { Navbar } from "../components/navbar";
import { Hero } from "../components/hero"
import { Footer } from "../components/footer"
import { Services } from "../components/services"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Footer />
    </>
  );
}
