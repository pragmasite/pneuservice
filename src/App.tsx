import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import OpeningHoursSection from "@/components/OpeningHoursSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import DraftModal from "@/components/DraftModal";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <OpeningHoursSection />
        <ContactSection />
      </main>
      <Footer />
      <DraftModal />
    </div>
  );
}

export default App;
