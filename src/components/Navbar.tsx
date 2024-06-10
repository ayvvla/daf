"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      // Assuming 768px is your md breakpoint
      setNav(false);
    }
  };

  // Set up event listener for window resize
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const links = [
    {
      id: 1,
      link: "HOME",
    },
    {
      id: 2,
      link: "OUR EVENTS",
    },
    {
      id: 3,
      link: "TEAMS",
    },
    {
      id:4,
      link:"GALLERY"
    },
    {
      id: 5,
      link: "CONTACT US",
    },
  ];

  return (
    <header className="nav bg-background sticky flex h-20 w-full items-center justify-between px-4 text-white">
      <div>
        <h1 className="font-signature text-primary ml-2 text-5xl">
          <Link className="link-underline link-underline-black" href="/">
            DAF
          </Link>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-links link-underline text-foreground hover:secondary-foreground cursor-pointer px-4 font-medium capitalize duration-200 hover:scale-105"
          >
            <Link href={link}>{link}</Link>
          </li>
        ))}
      </ul>

      <Button asChild className="hidden md:block">
        <Link href="/team/register" className="py-3">Register Your Team</Link>
      </Button>

      <div
        onClick={() => setNav(!nav)}
        className="z-10 cursor-pointer pr-4 text-gray-500 md:hidden"
      >
        {nav ? (
          <X size={30} color="#025938" />
        ) : (
          <Menu size={30} color="#025938" />
        )}
      </div>

      {nav && (
        <ul className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="cursor-pointer px-4 py-6 text-4xl capitalize"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </li>
          ))}
          <Button asChild className="md:hidden">
            <Link href="/team/register">Register Your Team</Link>
          </Button>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
