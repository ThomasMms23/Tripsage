import Image from "next/image";
import { GlobeDemo } from "../app/components/globedemo";
import { FlipWordsDemo } from "../app/components/flipworddemo";
import Header from "../app/components/header";
import Footer from "../app/components/footer";
import Faq from "../app/components/faq";
import { Pricing } from "../app/components/ui/pricing";
import { MarqueeDemo } from "../app/components/MarqueeDemo";
import { TabsDemo } from "../app/components/tabs";

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
