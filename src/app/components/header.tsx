"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="max-w-7xl mx-auto flex justify-between items-center py-6 px-12 bg-main-color relative">
      <div>
        <Link href="/" legacyBehavior>
          <a>
            <Image src={"/TRIPSAGE.svg"} alt="Logo" width={80} height={80} />
          </a>
        </Link>
      </div>
      <nav className="text-neutral-100 hidden lg:flex">
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
      <button
        className="lg:hidden text-neutral-100"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      {isMenuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-main-color text-neutral-100 lg:hidden">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li>
              <Link href="#demo" legacyBehavior>
                <a
                  className="hover:text-neutral-300 transition-colors"
                  onClick={toggleMenu}
                >
                  Demo
                </a>
              </Link>
            </li>
            <li>
              <Link href="#pricing" legacyBehavior>
                <a
                  className="hover:text-neutral-300 transition-colors"
                  onClick={toggleMenu}
                >
                  Pricing
                </a>
              </Link>
            </li>
            <li>
              <Link href="#contact" legacyBehavior>
                <a
                  className="hover:text-neutral-300 transition-colors"
                  onClick={toggleMenu}
                >
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
