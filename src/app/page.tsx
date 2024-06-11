import Image from "next/image";
import { GlobeDemo } from "./components/globedemo";
import { FlipWordsDemo } from "./components/flipworddemo";
import Header from "./components/header";
import Footer from "./components/footer";
import { Pricing } from "./components/ui/pricing";
import { MarqueeDemo } from './components/MarqueeDemo';

export default function Home() {
  return (
    <main>
      <Header />
      <div className="flex flex-col min-h-screen items-center px-12 py-0 lg:flex-row lg:justify-between">
        <FlipWordsDemo />
        <GlobeDemo />
      </div>
      <Pricing />
      <MarqueeDemo />
      <Footer />
    </main>
  );
}
