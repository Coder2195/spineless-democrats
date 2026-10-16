import Image from "next/image";
import type { FC } from "react";

const Navbar: FC = () => {
  return (
    <nav id="navbar">
      <Image
        src="/icon.svg"
        alt="Logo"
        width={36}
        height={36}
        className="w-10 h-10"
      />
      This is satire & 1st amendment free speech, classed under fair use.
    </nav>
  );
};

export default Navbar;
