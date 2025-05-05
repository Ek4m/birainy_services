import Link from "next/link";
import React, { FC } from "react";

interface NavLinkProps {
  title: string;
  className?: string;
  href: string;
}

export const NavLink: FC<NavLinkProps> = ({ href, title, className = "" }) => {
  return (
    <li className="mr-6">
      <Link className={`text-lg ${className}`} href={href}>
        {title}
      </Link>
    </li>
  );
};
