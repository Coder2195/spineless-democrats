import Image from "next/image";
import type { FC } from "react";
import Title from "@/components/home/title";

const HomePage: FC = () => {
  return (
    <>
      <div className="w-full bg-primary text-white py-20 mb-20 text-center h-[95dvh] max-h-250">
        <div className="restrict-width">
          <Title />
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
          <div className="py-4 overflow-x-auto w-full flex gap-4">
            {["/criticisms/democrats-cave.avif"].map((url) => (
              <Image
                key={url}
                src={url}
                width={500}
                height={250}
                alt="Democrats Cave"
                className="rounded-lg shadow-2xl shadow-primary"
              />
            ))}
          </div>
        </section>

        <section className="my-8">
          <h2>Israel!</h2>
          <p>Nathan-and-yahoo impressed.</p>
        </section>

        <section className="my-16">
          <h2>Register to be a Spineless Democrat!</h2>
          <h3>Criteria</h3>
          <ul>
            <li>Comfortable bootlicking corporations</li>
            <li>
              Issue "<em>strongly</em>" worded letters of condemnation
            </li>
            <li>Give MAGA some wins when they are struggling</li>
            <li>Continue meaningless wars</li>
            <li>Call centrists "socialists", and right wing "centrists"</li>
          </ul>

          <button type="button" className="button-primary">
            Register
          </button>
        </section>
      </div>
    </>
  );
};

export default HomePage;
