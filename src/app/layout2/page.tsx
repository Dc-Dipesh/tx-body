"use client";
import HeroSection from "@/components/hero-section";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Mousewheel, Pagination } from "swiper/modules";
import ProductSection from "@/components/product-section";
import ProposalSection from "@/components/proposal-section";
import Footer from "@/components/footer";
import { useRef } from "react";
import type { SwiperRef } from "swiper/react";

export default function Home() {
  const swiperRef = useRef<SwiperRef | null>(null);

  const goToTop = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(0);
    }
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="overflow-auto relative divide-y-2 divide-[#404040]/25">
      <div className="container mx-auto">
        <HeroSection />
      </div>
      <ProductSection />
      <ProposalSection />
      <Footer onBackToTop={goToTop} />
    </div>
  );
}
