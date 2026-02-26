"use client";

import { Menu, SquareTerminal } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Separator } from "./ui/separator";
import { navData } from "@/lib/data";
import { usePathname } from "next/navigation";

const Header = () => {
  const currentPath = usePathname();
  console.log({ currentPath });

  const navbarList = navData.map((item) => (
    <Link
      href={item.href}
      key={item.title}
      className={`flex items-center justify-center gap-1 group ${
        currentPath === item.href.toLocaleLowerCase() ? "text-primary" : ""
      }`}
    >
      <span className="text-sm font-semibold group-hover:text-primary transition-all duration-300">
        {item.title}
      </span>
    </Link>
  ));

  return (
    <div className="flex items-center justify-between">
      <div className="bg-card w-max md:w-4xl md:mx-auto shadow py-2 px-4 md:px-6 rounded-xl border">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-2">
            <div className="gradient p-1 rounded">
              <SquareTerminal className="text-card size-6" />
            </div>
            <span className="text-gradient font-extrabold text-md">
              WahyuEN
            </span>
          </div>
          <div className="items-center justify-center gap-6 hidden md:flex">
            {navbarList}
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <Popover>
          <PopoverTrigger asChild>
            <Button size="icon" variant="outline">
              <Menu />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-44 mr-4">
            <div className="grid gap-4">
              <Separator />
              <div className="space-y-4">{navbarList}</div>
              <Separator />
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default Header;
