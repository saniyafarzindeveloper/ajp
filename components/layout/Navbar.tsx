"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

import AutoChangingPartyName from "./AutoChangingPartyName";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/lib/language-provider";

import type { NavKey } from "@/types/navigation";


const menuItems: {
  key: NavKey;
  href?: string;
  subItems?: { key: NavKey; href: string }[];
}[] = [
  {
    key: "upcomingEvents",
    href: "/upcoming-events",
  },
  {
    key: "mediaResources",
    subItems: [
      { key: "photoGallery", href: "/" },
      { key: "videoGallery", href: "/" },
      { key: "speech", href: "/" },
    ],
  },
  {
    key: "developmentInitiatives",
    href: "/development-initiatives",
  },
  {
    key: "aboutUs",
    href: "/about",
  },
  {
    key: "contactUs",
    href: "/contact-us",
  },
];


export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const { t } = useLanguage();

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto flex max-w-full items-center justify-between px-2 py-2 sm:px-6 lg:px-8">
        {/* LOGO */}
        <AutoChangingPartyName />

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-start">
          <ul className="ml-7 inline-flex space-x-8">
            {menuItems.map((item, index) => (
              <li key={item.key} className="relative">
                {item.subItems ? (
                  <div className="relative group">
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="inline-flex items-center text-md font-normal text-gray-800 hover:text-gray-900"
                    >
                      {t.nav[item.key]}
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </button>

                    {openDropdown === index && (
                      <ul className="absolute left-0 mt-2 w-48 space-y-2 bg-white border border-gray-200 py-2 rounded-lg shadow-lg">
                        {item.subItems.map((sub) => (
                          <li key={sub.key}>
                            <Link
                              href={sub.href}
                              className="block px-4 py-2 text-md font-normal hover:bg-gray-100"
                            >
                              {t.nav[sub.key]}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="inline-flex items-center text-md font-normal text-gray-800 hover:text-gray-900"
                  >
                    {t.nav[item.key]}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* DESKTOP ACTIONS */}
        <div className="hidden lg:flex items-center space-x-2">
          <LanguageToggle />

          <Link href="/join-us">
            <Button className="bg-[#f58220] hover:bg-[#ef7e1a] text-white cursor-pointer">
              {t.nav.joinUs}
            </Button>
          </Link>

          <Link href="/donate">
            <Button className="bg-[#f16c20] hover:bg-[#d86b0c] text-white cursor-pointer">
              {t.nav.donate}
            </Button>
          </Link>
        </div>

        {/* MOBILE MENU */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger>
              <div className="flex flex-col space-y-1">
                <span className="h-1 w-5 bg-gray-800"></span>
                <span className="h-1 w-5 bg-gray-800"></span>
                <span className="h-1 w-5 bg-gray-800"></span>
              </div>
            </SheetTrigger>

            <VisuallyHidden>
              <SheetContent side="right" className="w-72 bg-white p-4">
                <div className="flex items-center justify-between">
                  <AutoChangingPartyName />
                  <LanguageToggle />
                </div>

                <div className="flex flex-col gap-4 mt-4">
                  <nav className="flex flex-col gap-3">
                    {menuItems.map((item, index) => (
                      <div key={item.key}>
                        {item.subItems ? (
                          <>
                            <button
                              onClick={() => toggleDropdown(index)}
                              className="flex items-center justify-between w-full text-sm font-light text-gray-800"
                            >
                              {t.nav[item.key]}
                              <ChevronDown className="h-4 w-4" />
                            </button>

                            {openDropdown === index && (
                              <ul className="ml-3 mt-2 space-y-2">
                                {item.subItems.map((sub) => (
                                  <li key={sub.key}>
                                    <SheetClose asChild>
                                      <Link
                                        href={sub.href}
                                        className="block px-2 py-1 text-sm hover:bg-gray-100"
                                      >
                                        {t.nav[sub.key]}
                                      </Link>
                                    </SheetClose>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </>
                        ) : (
                          <SheetClose asChild>
                            <Link
                              href={item.href}
                              className="block px-2 py-1 text-sm hover:bg-gray-100"
                            >
                              {t.nav[item.key]}
                            </Link>
                          </SheetClose>
                        )}
                      </div>
                    ))}
                  </nav>

                  <SheetClose asChild>
                    <Link href="/join-us">
                      <Button className="bg-[#f58220] w-full text-white mt-4">
                        {t.nav.joinUs}
                      </Button>
                    </Link>
                  </SheetClose>

                  <SheetClose asChild>
                    <Link href="/donate">
                      <Button className="bg-[#f58220] w-full text-white mt-2">
                        {t.nav.donate}
                      </Button>
                    </Link>
                  </SheetClose>
                </div>
              </SheetContent>
            </VisuallyHidden>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
