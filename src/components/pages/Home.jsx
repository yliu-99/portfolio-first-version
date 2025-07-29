import Footer from "../global/Footer";
import Header from "../global/Header";
import Hero from "../home/Hero";
import About from "../home/AboutSection";
import Projects from "../home/Projects";


function Home() {
    return (
        <div>
        <Header />
        <Hero />
        <About />
        <Projects />
        <Footer />
        </div>
    );
}

export default Home;