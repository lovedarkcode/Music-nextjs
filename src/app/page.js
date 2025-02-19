import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/ui/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";


export default function Home() {
  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-gradient-white/[0.02]">
      
      <Herosection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MusicSchoolTestimonials />
      <UpcomingWebinars />
      <Instructors />
      <Footer />
      
    </div>
    
  );
}
