// Header.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const pathname = usePathname();

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
    if (!isNavVisible) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  const closeNav = () => {
    setIsNavVisible(false);
    document.body.classList.remove("no-scroll");
  };

  const isActiveLink = (path: string) =>
    pathname === path ? "activeLink" : "";

  return (
    <header className="header">
      <Link href="/" passHref>
        <Image
          alt="logo"
          src="/TRIPSAGE.svg"
          className="header__logo"
          width={50}
          height={50}
        />
      </Link>
      <div
        className={`nav-burger ${isNavVisible ? "open" : ""}`}
        onClick={toggleNav}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`header__nav ${isNavVisible ? "open" : ""}`}>
        <Link legacyBehavior href="/" passHref>
          <a className={isActiveLink("/")} onClick={closeNav}>
            Home
          </a>
        </Link>
        <Link legacyBehavior href="#Pricing" passHref>
          <a className={isActiveLink("#Pricing")} onClick={closeNav}>
            Pricing
          </a>
        </Link>
        <Link legacyBehavior href="#demo" passHref>
          <a className={isActiveLink("#demo")} onClick={closeNav}>
            Demo
          </a>
        </Link>
        <Link legacyBehavior href="#Contact" passHref>
          <a className={isActiveLink("#Contact")} onClick={closeNav}>
            Contact
          </a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
