
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Loading } from "@/components/Loading";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Show loading for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16"> {/* Add padding-top to account for fixed navbar */}
        <div id="hero">
          <Hero />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="gallery">
          <Gallery />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
