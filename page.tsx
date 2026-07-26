import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Industries from "@/components/Industries";
import WhyChooseUs from "@/components/WhyChooseUs";
import ClientJourney from "@/components/ClientJourney";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <WhoWeAre />
      <Services />
      <Portfolio />
      <Industries />
      <WhyChooseUs />
      <ClientJourney />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
