import Hero from "@/app/components/Hero";
import Countdown from "@/app/components/Countdown";
import RSVPForm from "@/app/components/RSVPForm";
import Gallery from "@/app/components/Gallery";
import Maps from "@/app/components/Maps";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <Hero />
      <Countdown targetDate="2025-10-05T08:00:00" />
      <Gallery />
      <Maps />
      <RSVPForm />
      <Footer />
    </main>
  );
}