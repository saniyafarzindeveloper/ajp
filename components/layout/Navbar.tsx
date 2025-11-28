"use client";
import { useState } from "react";
import Image from "next/image";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const menuItems = [
  {
    name: "Upcoming Events",
    href: "/",
  },
  {
    name: "Media Resources",
    subItems: [
      { name: "Press Release", href: "/" },
      { name: "Speech", href: "/" },
     { name: "Rallies", href: "/" },
    ],
  },
//   {
//     name: "Courses",
//     subItems: [
//       { name: "Logistics", href: "/logistics" },
//       { name: "SCM", href: "/scm" },
//       { name: "English Speaking", href: "/english-speaking" },
//     ],
//   },
  {
    name: "About Us",
    href: "/",
  },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto flex max-w-full items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        {/* LOGO */}
        <div className="inline-flex items-center space-x-3">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/helicopter.png" alt="Logo" width={70} height={70} />
            <p className="font-bold text-2xl text-[#f58220]">AAM JANTA PARTY</p>
          </Link>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-start">
          <ul className="ml-12 inline-flex space-x-8">
            {menuItems.map((item, index) => (
              <li key={item.name} className="relative">
                {item.subItems ? (
                  <div className="relative group">
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="inline-flex items-center text-md font-normal text-gray-800 hover:text-gray-900"
                    >
                      {item.name}
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </button>

                    {openDropdown === index && (
                      <ul
                        className="absolute left-0 mt-2 w-48 space-y-2 bg-white border border-gray-200 py-2 rounded-lg shadow-lg"
                        style={{ zIndex: 1001 }}
                      >
                        {item.subItems.map((sub) => (
                          <li key={sub.name}>
                            <Link
                              href={sub.href}
                              className="block px-4 py-2 text-md font-normal hover:bg-gray-100"
                            >
                              {sub.name}
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
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* DESKTOP BUTTON */}
        <div className="hidden lg:block space-x-1">
          <Link href="/">
            <Button className="bg-[#f58220] hover:bg-[#ef7e1a] text-white cursor-pointer">
              Join Us
            </Button>
          </Link>

           <Link href="/">
            <Button className="bg-[#f16c20] hover:bg-[#d86b0c] text-white cursor-pointer">
              Donate Now
            </Button>
          </Link>
        </div>

        {/* MOBILE MENU (Sheet) */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger>
              <div className="flex flex-col space-y-1">
                <span className="h-1 w-5 bg-gray-800"></span>
                <span className="h-1 w-5 bg-gray-800"></span>
                <span className="h-1 w-5 bg-gray-800"></span>
              </div>
            </SheetTrigger>

            <SheetContent side="right" className="w-72 bg-white p-4">
              <VisuallyHidden>
                <h2>Mobile Navigation Menu</h2>
              </VisuallyHidden>

              <div className="flex flex-col gap-4 mt-2">
                <SheetClose asChild>
                  <Link href="/" className="flex items-center gap-3">
                    <Image
                      src="/images/helicopter.png"
                      alt="Logo"
                      width={60}
                      height={60}
                    />
                  </Link>
                </SheetClose>

                <nav className="flex flex-col gap-3 mt-4">
                  {menuItems.map((item, index) => (
                    <div key={item.name}>
                      {item.subItems ? (
                        <>
                          <button
                            onClick={() => toggleDropdown(index)}
                            className="flex items-center justify-between w-full text-sm font-light text-gray-800"
                          >
                            {item.name}
                            <ChevronDown className="h-4 w-4" />
                          </button>

                          {openDropdown === index && (
                            <ul className="ml-3 mt-2 space-y-2">
                              {item.subItems.map((sub) => (
                                <li key={sub.name}>
                                  <SheetClose asChild>
                                    <Link
                                      href={sub.href}
                                      className="block px-2 py-1 text-sm hover:bg-gray-100"
                                    >
                                      {sub.name}
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
                            {item.name}
                          </Link>
                        </SheetClose>
                      )}
                    </div>
                  ))}
                </nav>

                <SheetClose asChild>
                  <Link href="/contact-us">
                    <Button className="bg-[#f58220] hover:bg-[#f58220] w-full text-white mt-4">
                      Contact Us
                    </Button>
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
