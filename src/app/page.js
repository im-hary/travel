import ServicesSection from "@/Components/category";
import Destination from "@/Components/destination";
import Footer from "@/Components/footer";
import HeroSection from "@/Components/hero";
import TravelStepsSection from "@/Components/steps";
import NewsletterSubscribe from "@/Components/subscription";
import TestimonialSection from "@/Components/testimonal";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <Destination />
      <TravelStepsSection />
      <TestimonialSection />
      <NewsletterSubscribe />
      <Footer />
    </>
  );
}
