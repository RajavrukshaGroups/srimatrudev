"use client";

import React from "react";
import { InfiniteMovingCards } from "./infMovCards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[30rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h1 className="text-3xl font-bold text-black">Customer Testimonials</h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "We had been searching for the perfect residential plot for months,but it was not until we connected with them.Their team is incredibly knowledgeable, patient, and transparent throughout the process.",
    name: "Ravi & Chandana",
  },
  {
    quote:
      "The professionalism and clarity provided by Sri Matru Developers were unmatched.They showed us multiple opinions within our budget,explained the pros and cons of each location and even helped with legal verification.",
    name: "Anita Desai",
  },
  {
    quote:
      "Buying land can be intimidating, but Sri Matru Developers made it simple.They gave honest advice,didn't push for a sale and helped us choose a plot that fits our long-term goals.",
    name: "Venugopal G K",
  },
  {
    quote:
      "They respected our preferences,gave sound legal and financial guidance and ensured a clean title transfer.A fantastic experience.",
    name: "Rajeev & Sunita",
  },
  {
    quote:
      "Smooth,professional, and trustworthy.The team helped me invest in a residential plot in a fast developing area.The paperwork was handled efficiently and there were no hidden surprises.",
    name: "Umesh Chandra",
  },
];
