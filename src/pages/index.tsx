import React, { useState, useEffect } from "react";
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
import Loading from "../views/Loading";
import styles from "../styles/Index.module.css";

export default function Home() {
  // Step 1: Manage loading state
  const [isLoading, setIsLoading] = useState(true);

  // Step 2: Simulate loading delay (replace with your actual data loading logic)
  useEffect(() => {
    // Simulate a 2-second loading time
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimer); // Clean up the timer on component unmount
  }, []);

  // Step 3: Conditional rendering based on loading state
  return (
    <>
      <Head>
        <title>Portfolio Florencia Lopez</title>
        <meta name="description" content="UI/UX DESIGNER" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* Show the Loading component with isVisible prop */}
        <Loading isVisible={isLoading} />

        {/* Once loading is complete, show the main content */}
        {!isLoading && (
          <div className={styles.background}>
            <Navbar />
            <Hero />
            <Phrases />
            <Career />
            <Projects />
            <Crazy />
            <LetsGetInTouch />
            <ContactMe />
            <Footer />
          </div>
        )}
      </main>
    </>
  );
}
