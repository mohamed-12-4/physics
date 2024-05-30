import Hero from "@/components/main/Hero";
import Navbar from "@/components/main/Navbar";
import StarsCanvas from "@/components/main/StarBackground";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <Navbar />
      <StarsCanvas />
      <div className="flex flex-col h-[850px] gap-20">
        <Hero />
      </div>
    </main>
      );
}
