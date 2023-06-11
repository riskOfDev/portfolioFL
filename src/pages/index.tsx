import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../views/Hero";
import Phrases from "../views/Phrases";
import Crazy from "../views/Crazy";
import LetsGetInTouch from "../views/LetsGetInTouch";
import Projects from "../views/Projects";
import ContactMe from "../views/ContactMe";
import Footer from "../views/Footer";
import Career from "../views/Career";
import Banner from "../views/Banner";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio Florencia Lopez</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ backgroundColor: "#F7E7FF" }}>
        <Navbar />
        <div style={{ height: "80px" }}></div>
        <Hero />
        <Phrases />
        <Career />
        <Projects />
        <Crazy />
        <LetsGetInTouch />
        <ContactMe />
        <Footer />
      </main>
    </>
  );
}
