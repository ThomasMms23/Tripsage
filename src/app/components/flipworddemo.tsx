import React from "react";
import { FlipWords } from "../components/ui/flip-words";

export function FlipWordsDemo() {
  const words = ["memorable", "sensational", "adventurous"];

  return (
    <div className="flex justify-center items-center">
      <div className="text-5xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Your budget, your rules: choose trips that are
        <FlipWords words={words} />
      </div>
    </div>
  );
}
