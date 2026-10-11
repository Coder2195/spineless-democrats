import Image from "next/image";
import type { FC } from "react";

const Navbar: FC = () => {
  return (
    <nav id="navbar">
      <Image
        src="/icon.svg"
        alt="Logo"
        width={64}
        height={64}
        className="w-12 h-12"
      />
      This is satire & 1st amendment free speech, classed under fair use.
    </nav>
  );
};

export default Navbar;
