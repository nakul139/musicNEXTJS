"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <Link href="/courses">
              <HoveredLink>All Courses</HoveredLink>
            </Link>
            <Link href="/courses">
              <HoveredLink>Basic Music Therory</HoveredLink>
            </Link>
            <Link href="/courses">
              <HoveredLink>Advanced Composition</HoveredLink>
            </Link>
            <Link href="/courses">
              <HoveredLink>Songwriting</HoveredLink>
            </Link>
            <Link href="/courses">
              <HoveredLink>Music Production</HoveredLink>
            </Link>
          </div>
        </MenuItem>
        <Link href={"/contacts"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact Us"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
