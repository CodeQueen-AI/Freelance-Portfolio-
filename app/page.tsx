import PageWrapper from "./components/PageWrapper";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero Sec";
import Experience from "./components/Experience";
import Skill from "./components/Skills";
import Projects from "./components/Projects";
import Banner from "./components/Banner";
import Services from "./components/Services";
import ScrollStack from "./components/scrollstack";
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
      <Services />
      <ScrollStack />
      <Contact />
      <Footer />
    </PageWrapper>
  );
}