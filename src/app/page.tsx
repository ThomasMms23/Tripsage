import Image from "next/image";
import { GlobeDemo } from "./components/globedemo";
import { FlipWordsDemo } from "./components/flipworddemo";
import Header from "./components/header";
import Footer from "./components/footer";
import Faq from "./components/faq";
import { Pricing } from "./components/ui/pricing";
import { MarqueeDemo } from "./components/MarqueeDemo";
import { TabsDemo } from "./components/tabs";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="max-w-7xl mx-auto flex flex-col items-center px-12 py-0 lg:flex-row lg:justify-between">
        <FlipWordsDemo />
        <GlobeDemo />
      </div>
      <TabsDemo />
      <Pricing />
      <MarqueeDemo />
      <Faq />
      <Footer />
    </main>
  );
}
