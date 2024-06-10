import Image from "next/image";
import { GlobeDemo } from "./components/globedemo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <GlobeDemo />
    </main>
  );
}
