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

import type { NavKey } from "@/types/translation/navigation";

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
      { key: "photoGallery", href: "/photo-gallery" },
      { key: "videoGallery", href: "/video-gallery" },
      { key: "speech", href: "/speech" },
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
                ) : item.href ? (
                  <Link
                    href={item.href}
                    className="inline-flex items-center text-md font-normal text-gray-800 hover:text-gray-900"
                  >
                    {t.nav[item.key]}
                  </Link>
                ) : null}
              </li>
            ))}
          </ul>
        </div>

        {/* DESKTOP ACTIONS */}
        <div className="hidden lg:flex items-center space-x-2">
          <LanguageToggle />

          {/* <Link href="/join-us">
            <Button className="bg-[#f58220] hover:bg-[#ef7e1a] text-white cursor-pointer">
              {t.nav.joinUs}
            </Button>
          </Link> */}

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
                <span className="h-1 w-5 bg-gray-800 rounded" />
                <span className="h-1 w-5 bg-gray-800 rounded" />
                <span className="h-1 w-5 bg-gray-800 rounded" />
              </div>
            </SheetTrigger>

            <VisuallyHidden>
              <SheetContent side="right" className="w-80 bg-white p-0">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-4 border-b">
                  <AutoChangingPartyName />
                  <LanguageToggle />
                </div>

                {/* Navigation */}
                <div className="flex flex-col px-4 py-6">
                  <nav className="flex flex-col gap-2">
                    {menuItems.map((item, index) => (
                      <div key={item.key}>
                        {item.subItems ? (
                          <>
                            <button
                              onClick={() => toggleDropdown(index)}
                              className="flex items-center justify-between w-full rounded-lg px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 transition"
                            >
                              {t.nav[item.key]}
                              <ChevronDown
                                className={`h-4 w-4 transition ${
                                  openDropdown === index ? "rotate-180" : ""
                                }`}
                              />
                            </button>

                            {openDropdown === index && (
                              <ul className="ml-3 mt-2 space-y-1">
                                {item.subItems.map((sub) => (
                                  <li key={sub.key}>
                                    <SheetClose asChild>
                                      <Link
                                        href={sub.href}
                                        className="block rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 transition"
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
                          item.href && (
                            <SheetClose asChild>
                              <Link
                                href={item.href}
                                className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 transition"
                              >
                                {t.nav[item.key]}
                              </Link>
                            </SheetClose>
                          )
                        )}
                      </div>
                    ))}
                  </nav>

                  {/* Divider */}
                  <div className="my-6 h-px bg-gray-200" />

                  {/* CTA Buttons */}
                  <div className="flex flex-col gap-3">
                    <SheetClose asChild>
                      <Link href="/join-us">
                        <Button className="w-full bg-[#f58220] hover:bg-[#ef7e1a] text-white">
                          {t.nav.joinUs}
                        </Button>
                      </Link>
                    </SheetClose>

                    <SheetClose asChild>
                      <Link href="/donate">
                        <Button className="w-full border border-[#f58220] text-[#f58220] bg-transparent hover:bg-orange-50">
                          {t.nav.donate}
                        </Button>
                      </Link>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </VisuallyHidden>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
