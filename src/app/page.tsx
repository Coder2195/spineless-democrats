import type { FC } from "react";
import Spineless from "@/components/home/spineless";

const HomePage: FC = () => {
  return (
    <>
      <div className="h-dvh w-full bg-primary text-white py-20 text-center min-h-fit max-h-200">
        <h1 className="flex flex-col items-center justify-center mb-20">
          <span className="uppercase text-lg">We are</span>
          <span>
            The <Spineless /> Democratic Party
          </span>
        </h1>

        <blockquote>
          "If the Republicans believe certain people shouldn't have human
          rights, and we believe they do, let's compromise in the middle and
          make them subhuman!"
        </blockquote>
      </div>
      <div className="content">
        <h2>Please don't take action</h2>
        <p>We want to keep the status quo, so please don't take any action.</p>
      </div>
    </>
  );
};

export default HomePage;
