import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Grid from "@/components/Grid";
import { navItems } from "@/data";
import RecentProjects from "@/components/RecentProjects";
import { TimelineDemo } from "@/components/ui/TimelineDemo";
import MovingTechCarousel from "@/components/Carousel";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col scroll-smooth overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <Grid />
        <MovingTechCarousel />
        <RecentProjects />
        <TimelineDemo />
        <Footer />
      </div>
    </main>
  );
}
