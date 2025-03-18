import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import MusicSchoolTestimonials from "@/components/HearOurHarmony";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import Navbar from "@/components/navbar";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import { StickyScrollRevealDemo } from "@/components/WhyChooseUs";
export default function Home() {
  return (
    <>
      <div className="bg-black">
        <Navbar />
        <HeroSection />
        <FeaturedCourses />
        <StickyScrollRevealDemo />
        <MusicSchoolTestimonials />
        <UpcomingWebinar />
        <Instructor />
        <Footer />
      </div>
    </>
  );
}
