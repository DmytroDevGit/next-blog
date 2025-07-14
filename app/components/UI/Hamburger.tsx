"use client";

import React from "react";

// hooks
import { usePathname } from "next/navigation";
import { useHamburger } from "@/app/hooks";

export default function Hamburger({ ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className } = props;
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useHamburger(pathname);

  return (
    <button
      className={`group block cursor-pointer w-[40px] ${className}`}
      aria-expanded={isExpanded}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className={'bg-black h-[6px] rounded transition group-aria-[expanded=true]:rotate-45 group-aria-[expanded=true]:origin-[15%_15%] group-aria-[expanded=true]:w-[44px]'}></div>
      <div className={'bg-black h-[6px] rounded transition mt-[4px] group-aria-[expanded=true]:opacity-0'}></div>
      <div className={'bg-black h-[6px] rounded transition mt-[4px] group-aria-[expanded=true]:-rotate-45 group-aria-[expanded=true]:origin-[15%_95%] group-aria-[expanded=true]:w-[44px]'}></div>
    </button>
  )
}
