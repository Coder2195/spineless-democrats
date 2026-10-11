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
    </nav>
  );
};

export default Navbar;
