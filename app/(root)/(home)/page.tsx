import Navbar from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import Image from "next/image";
import HeroTitle from "@/components/HeroTitle";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { HeroParallaxDemo } from "@/components/me";
import { CardHoverEffectDemo } from "@/components/demoskills";
import { FloatingNavDemo } from "@/components/float";
import { ThreeDCardDemo } from "@/components/project";
import { TestimonialForm } from "@/components/testi";
import Footer from "@/components/footer";
import { DockDemo } from "@/components/skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <FloatingNavDemo />
      <HeroParallaxDemo />
      <footer className="mt-20 sm:px-10 px-5">
        <div className="screen-max-width">
          <div className="bg-neutral-700 my-5 h-[1px] w-full" />
        </div>
      </footer>
      <DockDemo />
      <ThreeDCardDemo />
      <TestimonialForm />
      <Footer />


    </>
  );
}
