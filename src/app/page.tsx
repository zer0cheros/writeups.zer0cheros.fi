import Recon from "@/components/Recon";
import Root from "@/components/Root";
import Summary from "@/components/Summary";
import User from "@/components/User";
import WriteUpSection from "@/components/WriteUpSection";
import Hero from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";
import Fade from "@/components/animation/Fade";
import Footer from "@/components/layout/Footer";
import { DataStructure } from "./types";

export default function Home( {searchParams}: {searchParams: { box: keyof DataStructure}}) {
  return (
    <Fade>
      <Hero/>
      <Navbar/>
      <Fade>
        <WriteUpSection>
          <Recon box={searchParams.box} />
          <User box={searchParams.box}/>
          <Root box={searchParams.box}/>
          <Summary box={searchParams.box}/>
        </WriteUpSection>
      </Fade>
      <Fade>
        <Footer />
      </Fade>
      
    </Fade>
  );
}
