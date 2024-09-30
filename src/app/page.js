import HeroServer from "@/components/hero/Server";
import "./globals.css";
import WebsitesServer from "@/components/websites/Server";

export default function Home() {
  return (
    <div>
      <HeroServer />
      <p className="text-center text-2xl py-20 max-w-3xl mx-auto leading-9 font-poppinsExtraLight">
        The CO2 footprint of the Internet's data centers alone may already be
        comparable to that of global air travel. The good news is that a growing
        number of major Internet corporations are becoming more environmentally
        conscientious, opting for more renewable energy sources for their data
        centers and operations.
      </p>
      <WebsitesServer />
    </div>
  );
}
