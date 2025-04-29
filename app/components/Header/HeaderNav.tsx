"use client";

import { usePathname } from "next/navigation";
import Link from "next/link"

export default function HeaderNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="main-nav">
      <ul className={'flex flex-col md:flex-row md:justify-end gap-y-4 md:gap-x-4 md:gap-y-0'}>
        <li>
          <Link className={pathname === "/" ? "font-bold" : "hover:underline"} href="/">Home</Link>
        </li>
        <li>
          <Link className={pathname.indexOf("/blog") > -1 ? "font-bold" : "hover:underline"} href="/blog">Blog</Link>
        </li>
        <li>
          <Link className={pathname === "/gallery" ? "font-bold" : "hover:underline"} href="/gallery">Gallery</Link>
        </li>
      </ul>
    </nav>
  )
}
