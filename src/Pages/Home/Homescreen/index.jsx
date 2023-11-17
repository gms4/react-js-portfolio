import HeroSection from "./Components/HeroSection/HeroSection";
import MySkills from "./Components/MySkills/MySkills";
import AboutMe from "./Components/AboutMe/AboutMe";
import MyPortfolio from "./Components/MyPortfolio/MyPortfolio";
import Testimonial from "./Components/Testimonials/Testimonials";
import Footer from "./Components/Footer/Footer";

export default function Home() {
    return (
    <>
        <HeroSection />
        <MySkills />
        <AboutMe />
        <MyPortfolio />
        <Testimonial />
        <Footer />
    </>
    );
}