import React from "react";
import { FlipWords } from "../components/ui/flip-words";
import { Button } from "./ui/button";
import Link from "next/link";

export function FlipWordsDemo() {
  const words = ["memorable", "sensational", "adventurous"];

  return (
    <div className="flex justify-center items-center">
      <div className="sm:text-center sm:mt-24">
        <div className="leading-tight font-extrabold text-4xl lg:text-5xl mx-auto text-neutral-600 dark:text-neutral-100">
          Your budget, your rules: choose trips that are{" "}
          <FlipWords words={words} />
        </div>
        <p className="text-neutral-400 mt-6">
          Discover your next adventure effortlessly. Enter your preferences like
          budget, season, and weather, and let us find the perfect destination
          for you. Start exploring now!
        </p>
        <Link href="#search">
          <Button className="mt-6 w-64">Discover</Button>
        </Link>
      </div>
    </div>
  );
}
