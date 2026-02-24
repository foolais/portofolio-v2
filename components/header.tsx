"use client";

import { Menu, Moon, SquareTerminal } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Separator } from "./ui/separator";

const navData = [
  {
    title: "Home",
    href: "/home",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const Header = () => {
  const navbarList = navData.map((item) => (
    <Link
      href={item.href}
      key={item.title}
      className="flex items-center justify-center gap-1 group"
    >
      <span className="text-sm font-semibold group-hover:text-primary transition-all duration-300">
        {item.title}
      </span>
    </Link>
  ));

  return (
    <div className="px-4 lg:px-0 flex items-center justify-between">
      <div className="bg-card w-max lg:w-2/3 lg:mx-auto shadow py-2 px-4 lg:px-6 rounded-xl border">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-2">
            <div className="gradient p-1 rounded">
              <SquareTerminal className="text-card size-6" />
            </div>
            <span className="text-gradient font-extrabold text-lg">
              WahyuEN
            </span>
          </div>
          <div className="items-center justify-center gap-6 hidden lg:flex">
            {navbarList}
          </div>
          <div className="sm:w-32 hidden lg:flex justify-end">
            <Button size="icon">
              <Moon />
            </Button>
          </div>
        </div>
      </div>
      <div className="block lg:hidden">
        <Popover>
          <PopoverTrigger asChild>
            <Button size="icon" variant="outline">
              <Menu />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-36 mr-4">
            <div className="grid gap-4">
              <div className="space-y-4">{navbarList}</div>
              <Separator />
              <Button>
                <Moon />
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default Header;
