import Navbar from "./components/Navbar"
import Hero from "./components/Hero Sec"
import Experience from "./components/Experience"
import Skill from "./components/Skills"
import Banner from "./components/Banner"
import Banner1 from "./components/Banner1"
import Services from "./components/Services"
import Hirebanner from "./components/Hirebanner"
import ScrollStack from "./components/scrollstack"
import ValueSection from "./components/valuesection"
export default function Page() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Experience/>
      <Skill/>
      <Banner/>
      <Banner1/>
      <Services/>
      <Hirebanner/>
      <ScrollStack/>
      <ValueSection/>
    </>
  );
}


