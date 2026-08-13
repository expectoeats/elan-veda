"use client";

import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import CategoryCards from "@/components/CategoryCards";
import PopularProducts from "@/components/PopularProducts";
import AyurvedicMedicines from "@/components/AyurvedicMedicines";
import PremiumSkincare from "@/components/PremiumSkincare";
import CosmeticProducts from "@/components/CosmeticProducts";
import AyurvedicExperts from "@/components/AyurvedicExperts";
import VideoTestimonials from "@/components/VideoTestimonials";
import CustomerReviews from "@/components/CustomerReviews";
import AppDownloadBanner from "@/components/AppDownloadBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ background: "#F0F7F2", minHeight: "100vh" }}>
      <Navbar />
      <HeroBanner />
      <CategoryCards />
      <PopularProducts />
      <AyurvedicMedicines />
      <PremiumSkincare />
      <CosmeticProducts />
      <AyurvedicExperts />
      <VideoTestimonials />
      <CustomerReviews />
      <AppDownloadBanner />
      <Footer />
    </main>
  );
}
