"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Recognition from "@/components/sections/Recognition";
import Contact from "@/components/sections/Contact";

const CustomCursor = dynamic(() => import("@/components/ui/CustomCursor"), { ssr: false });

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Recognition />
      <Contact />
      <Footer />
    </>
  );
}
