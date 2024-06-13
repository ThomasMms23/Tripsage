import React from "react";
import { FlipWords } from "../components/ui/flip-words";
import { Button } from "./ui/button";

export function FlipWordsDemo() {
  const words = ["memorable", "sensational", "adventurous"];

  return (
    <div className="flex justify-center items-center">
      <div>
        <p className="leading-tight font-extrabold text-4xl lg:text-5xl mx-auto text-neutral-600 dark:text-neutral-100">
          Your budget, your rules: choose trips that are{" "}
          <FlipWords words={words} />
        </p>
        <p className="text-neutral-400 mt-6">
          The NextJS boilerplate with all you need to build your SaaS, AI tool,
          or any other web app and make your first $ online fast.
        </p>
        <Button className="mt-6 w-64">Discover</Button>
      </div>
    </div>
  );
}
