"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const partyNames = [
  { text: "AAM JANTA PARTY (INDIA)", lang: "en" },
  { text: "आम जनता पार्टी (भारत)", lang: "hi" },
  { text: "عام جنتا پارٹی (ہند)", lang: "ur" },
];

export default function AutoChangingPartyName() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % partyNames.length);
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center space-x-3">
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/images/helicopter.png"
          alt="Logo"
          width={70}
          height={70}
        />

        <span
          key={partyNames[index].lang}
          className="font-bold text-xl text-[#f58220] transition-all duration-500 ease-out"
        >
          {partyNames[index].text}
        </span>
      </Link>
    </div>
  );
}
