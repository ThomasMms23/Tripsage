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
        <Link legacyBehavior href="#pricing" passHref>
          <a className={isActiveLink("#pricing")} onClick={closeNav}>
            Pricing
          </a>
        </Link>
        <Link legacyBehavior href="#search" passHref>
          <a className={isActiveLink("#search")} onClick={closeNav}>
            Search
          </a>
        </Link>
        <Link legacyBehavior href="#faq" passHref>
          <a className={isActiveLink("#faq")} onClick={closeNav}>
            FAQ
          </a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
