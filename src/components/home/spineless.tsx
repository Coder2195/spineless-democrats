"use client";

import { type FC, useEffect, useState } from "react";

const TEXT = "Spineless";

const Spineless: FC = () => {
  const [index, setIndex] = useState(-5);
  useEffect(() => {
    const interval = setInterval(() => {
      if (index >= TEXT.length) {
        clearInterval(interval);
        return;
      }
      setIndex(index + 1);
    }, 150);

    return clearInterval.bind(this, interval);
  });

  return (
    <span className="font-schoolbell">
      {index < 0 ? "..." : TEXT.slice(0, index).padEnd(3, ".")}
    </span>
  );
};

export default Spineless;
