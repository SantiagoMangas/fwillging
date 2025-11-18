import { Navbar } from "../components/navbar";
import { Hero } from "../components/hero"
import { Footer } from "../components/footer"
import { Services } from "../components/services"
import { Gallery } from "../components/gallery";
import { About } from "../components/about";
import { Products } from "../components/products";
import { Carousel } from "../components/carousel";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Carousel />
      <Products />
      <Gallery />
      <About />
      <Footer />
    </>
  );
}
