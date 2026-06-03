"use client";

import React, { useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HashLink({
  href,
  children,
  className,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const pathname = usePathname();

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      const [path, hash] = href.split("#");
      const currentPath = pathname.replace(/\/$/, "");
      const targetPath = path.replace(/\/$/, "");

      if (hash && currentPath === targetPath) {
        e.preventDefault();
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          window.history.pushState(null, "", href);
        }
      }
      onClick?.();
    },
    [href, pathname, onClick]
  );

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
