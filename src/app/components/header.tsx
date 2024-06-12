import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="max-w-7xl mx-auto flex justify-between items-center py-6 px-12 bg-main-color">
      <div>
        <Link href="/" legacyBehavior>
          <a>
            <Image src={"/TRIPSAGE.svg"} alt="Logo" width={80} height={80} />
          </a>
        </Link>
      </div>
      <nav className="text-neutral-100">
        <ul className="flex gap-4">
          <li>
            <Link href="#demo" legacyBehavior>
              <a className="hover:text-neutral-300 transition-colors">Demo</a>
            </Link>
          </li>
          <li>
            <Link href="#pricing" legacyBehavior>
              <a className="hover:text-neutral-300 transition-colors">
                Pricing
              </a>
            </Link>
          </li>
          <li>
            <Link href="#contact" legacyBehavior>
              <a className="hover:text-neutral-300 transition-colors">
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
