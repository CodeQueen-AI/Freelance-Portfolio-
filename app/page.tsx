import PageWrapper from "./components/PageWrapper";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero Sec";
import Experience from "./components/Experience";
import Skill from "./components/Skills";
import Projects from "./components/Projects";
import Banner from "./components/Banner";
import Banner1 from "./components/Banner1";
import Services from "./components/Services";
import Hirebanner from "./components/Hirebanner";
import ScrollStack from "./components/scrollstack";
import ValueSection from "./components/valuesection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <PageWrapper>
      <Navbar />
      <Hero />
      <Experience />
      <Skill />
      <Projects />
      <Banner />
      <Banner1 />
      <Services />
      <Hirebanner />
      <ScrollStack />
      <ValueSection />
      <Contact />
      <Footer />
    </PageWrapper>
  );
}