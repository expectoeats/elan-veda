import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import ShopByConcern from "@/components/ShopByConcern";
import Hero from "@/components/Hero";
import Bestsellers from "@/components/Bestsellers";
import TrustSection from "@/components/TrustSection";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-canvas">
      <AnnouncementBar />
      <Header />
      <ShopByConcern />
      <Hero />
      <Bestsellers />
      <TrustSection />
      <SocialProof />
      <Footer />
    </main>
  );
}
