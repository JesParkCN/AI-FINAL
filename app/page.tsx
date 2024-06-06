
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Skills2 from "@/components/main/Skills2";
import Projects2 from "@/components/main/Projects2";
import Footer from "@/components/main/Footer";
import Image from "next/image";
import Hero2 from "@/components/main/Hero2";
import Encryption from "@/components/main/Encryption";
export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
      <Hero />
      
        <Skills />
        <Projects2 />
        <Hero2 />
        <Encryption />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
