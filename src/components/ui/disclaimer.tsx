"use client";

import { type FC, useEffect, useState } from "react";

const Disclaimer: FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("show")) return;
    setShow(true);
    document.body.style.overflowY = "clip";
    console.log("show");
  }, []);

  return (
    show && (
      <div className="fixed left-0 right-0 w-dvw h-dvh bg-black/50 z-1000 flex justify-center items-center">
        <div className="bg-black rounded-lg p-4">
          <h1 className="text-2xl">Political Satire</h1>
          <p>
            This is satire protected by the first amendment and fair use. If you
            are allergic to such speech, now is your time to leave.
          </p>

          <div>
            <input type="checkbox" name="hideButton" id="hideButton" />
            <label htmlFor="hideButton" className="text-gray-400">
              Hide for next time
            </label>
          </div>
          <button
            type="button"
            className="button-primary"
            onClick={() => {
              document.body.style.overflowY = "auto";
              localStorage.setItem("show", "false");
              setShow(false);
            }}
          >
            Continue
          </button>
        </div>
      </div>
    )
  );
};

export default Disclaimer;
