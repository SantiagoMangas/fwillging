import { Navbar } from "../components/navbar";
import { Hero } from "../components/hero"
import { Footer } from "../components/footer"
import { Services } from "../components/services"
import { Gallery } from "../components/gallery";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Footer />
    </>
  );
}
