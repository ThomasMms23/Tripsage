import React from "react";
import { FlipWords } from "../components/ui/flip-words";

export function FlipWordsDemo() {
  const words = ["memorable", "sensational", "adventurous"];

  return (
    <div className="flex justify-center items-center">
      <div className="font-extrabold text-4xl lg:text-5xl mx-auto text-neutral-600 dark:text-neutral-100 ">
        <p className="leading-tight">
          Your budget, your rules: choose trips that are{" "}
          <span className=" bg-neutral-100 text-main-color rotate-10">
            sensational
          </span>
        </p>
      </div>
    </div>
  );
}
