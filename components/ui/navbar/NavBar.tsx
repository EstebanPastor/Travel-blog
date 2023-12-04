"use client";
import Link from "next/link";
import Button from "../button/Button";
import Route from "../route/Route";
import { navLinks } from "@/constants";
import MobileMenu from "../mobile-menu/MobileMenu";
import { useEffect, useState } from "react";
import useMenuActive from "@/hooks/useMenuActive";
import clsx from "clsx";

const NavBar = () => {
  const [isScrolling, setIsSCrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSCrolling(true);
      } else {
        setIsSCrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={clsx(
        "py-4 w-full",
        isScrolling ? "fixed top-0 bg-white shadow-lg z-10" : "relative"
      )}
    >
      <div
        className={clsx(
          "w-[95%] mx-auto max-w-[1450px] flex items-center justify-between border-b border-gray-100",
          isScrolling && "pb-0 border-none",
          !isScrolling && "pb-5"
        )}
      >
        <div className="flex-1">
          <Link href={"/"}>
            <h1 className="text-3xl font-extrabold text-secondary">
              Explore
              <span className="text-primary px-1">Tn'X</span>
            </h1>
          </Link>
        </div>
        <ul className="flex items-center justify-center gap-16 flex-2 max-md:hidden">
          {navLinks.map((link, index) => {
            const isActive = useMenuActive(link.route);
            return (
              <li key={index}>
                <Route
                  route={link.route}
                  label={link.label}
                  isActive={isActive}
                />
              </li>
            );
          })}
        </ul>
        <div className="flex gap-5 flex-1 justify-end max-md:hidden ">
          <Button text="Log In" onClick={() => null} aria="Log in button" />
          <Button text="Sign Un" onClick={() => null} aria="Sign up button" />
        </div>
        <div>
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
