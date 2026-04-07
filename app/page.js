import Banner from "@/components/Banner";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Reveal from "@/components/Reveal";

export default function Home() {
    return (
        <main>
            <Banner />
            <Reveal>
                <About />
            </Reveal>
            <Reveal>
                <Skills />
            </Reveal>
            <Reveal>
                <Projects />
            </Reveal>
            <Reveal>
                <Experience />
            </Reveal>
            <Reveal>
                <Education />
            </Reveal>
            <Reveal>
                <Contact />
            </Reveal>
        </main>
    );
}
