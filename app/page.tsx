import SmoothScroll from "./components/SmoothScroll";
import Hero from "./sections/Hero";
import ShopSection from "./sections/ShopSection";
import AboutSection from "./sections/AboutSection";
import BundesligaSection from "./sections/BundesligaSection";
import OpeningHoursSection from "./sections/OpeningHoursSection";
import ReservationSection from "./sections/ReservationSection";
import EventSection from "./sections/EventSection";
import FooterSection from "./sections/FooterSection";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="bg-zarko-dark">
        <Hero />
        <ShopSection />
        <AboutSection />
        <BundesligaSection />
        <OpeningHoursSection />
        <ReservationSection />
        <EventSection />
        <FooterSection />
      </main>
    </SmoothScroll>
  );
}
