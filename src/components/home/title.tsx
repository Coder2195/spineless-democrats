"use client";

import { type FC, useEffect, useState } from "react";

const TEXT = "Spineless";
const DELAY = 14;

const Title: FC = () => {
  const [index, setIndex] = useState(-4);
  useEffect(() => {
    const interval = setInterval(() => {
      if (index >= DELAY + TEXT.length) {
        clearInterval(interval);
        return;
      }
      setIndex(index + 1);
    }, 150);

    return clearInterval.bind(this, interval);
  });

  return (
    <h1 className="flex flex-col items-center justify-center my-20 break-word">
      <span className="uppercase text-lg flex gap-1">
        <span
          className={`${index > 0 ? "animate-appear-from-below" : "opacity-0"}`}
        >
          We
        </span>
        <span
          className={`${index > 2 ? "animate-appear-from-below" : "opacity-0"}`}
        >
          are
        </span>
      </span>
      <span className="flex gap-x-4 flex-wrap justify-center items-start">
        <span
          className={`${index > 4 ? "animate-appear-from-below" : "opacity-0"}`}
        >
          The
        </span>

        <span
          className={`font-schoolbell ${index > 8 ? "animate-appear-from-below" : "opacity-0"}`}
        >
          {index < DELAY
            ? "..."
            : TEXT.slice(0, Math.max(0, index - DELAY)).padEnd(3, ".")}
        </span>

        <span
          className={`${index > 6 ? "animate-appear-from-below" : "opacity-0"}`}
        >
          Democrats
        </span>
      </span>
    </h1>
  );
};

export default Title;
