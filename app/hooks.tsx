import { useEffect, useState } from "react";

export function useHamburger(pathname: string) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  useEffect(() => {
    setIsExpanded(false);
  }, [pathname])

  return [isExpanded, setIsExpanded] as const;
}
