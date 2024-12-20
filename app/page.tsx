import About from "@/components/About";
import Banner from "@/components/Banner";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main
      className='h-full w-full '
     >
      
    
      <div className='flex flex-col gap-20'>
        <Banner />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
