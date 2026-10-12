import Image from "next/image";
import type { FC } from "react";
import Spineless from "@/components/home/spineless";

const HomePage: FC = () => {
  return (
    <>
      <div className="w-full bg-primary text-white py-20 mb-20 text-center h-[max(40rem,95dvh)] max-h-200">
        <div className="restrict-width">
          {" "}
          <h1 className="flex flex-col items-center justify-center mb-20 break-word">
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
      </div>
      <div className="restrict-width">
        <section className="mb-8">
          <h2>Please don't take action!</h2>
          <p>
            We want to keep the status quo, so please don't take any action.
          </p>
        </section>

        <section className="my-8">
          <h2>We cave under zero pressure!</h2>
          <p>
            We put the I in DEI when it comes to giving everyone wins, including
            Republicans on deciding issues that matter to our voters!
          </p>
          <div className="py-4">
            <Image
              src="/criticisms/democrats-cave.avif"
              width={500}
              height={250}
              alt="Democrats Cave"
              className="rotate-4 rounded-lg shadow-2xl shadow-primary"
            />
          </div>
        </section>

        <section className="my-8">
          <h2>Israel!</h2>
          <p>Nathan-and-yahoo impressed.</p>
        </section>
      </div>
    </>
  );
};

export default HomePage;
