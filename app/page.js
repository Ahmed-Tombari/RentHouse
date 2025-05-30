import Image from "next/image";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Breadcrumb from "./components/ui/Breadcrumb";
import Products from "./components/ui/cards/Products";
import Gallery from "./components/ui/heroUi/gallery";

export default function Home() {
  return (
    <>
      <Header />

      <Navbar />
      <Breadcrumb />
      <Hero />
      <div className="w-full px-4 md:px-16 lg:px-32">
      <Gallery />
      </div>
      <Footer />
    </>
  );
}
