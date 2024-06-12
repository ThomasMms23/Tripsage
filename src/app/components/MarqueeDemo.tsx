// MarqueeDemo.tsx
import React from "react";
import { faker } from "@faker-js/faker";
import Marquee from "./ui/marquee";
import { cn } from "@/lib/utils";
import Image from "next/image";

// Génération des faux avis
const generateReviews = (count: number) => {
  return Array.from({ length: count }, () => ({
    name: faker.name.fullName(),
    username: `@${faker.internet.userName().toLowerCase()}`,
    body: faker.lorem.sentences(2),
    img: faker.image.avatar(),
  }));
};

const reviews = generateReviews(10); // Générer 10 avis aléatoires

// Composant pour l'affichage d'un avis
const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          src={img}
          alt=""
          width={32}
          height={32}
          layout="fixed"
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-neutral-100">{body}</blockquote>
    </figure>
  );
};

// Composant principal pour la démonstration du marquee
export const MarqueeDemo = () => {
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-20">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-50">
          What Our Customers Say
        </h2>
        <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed dark:text-gray-400">
          Real feedback from real users
        </p>
      </div>
      <Marquee pauseOnHover className="[--duration:15s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:15s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3"></div>
    </div>
  );
};
