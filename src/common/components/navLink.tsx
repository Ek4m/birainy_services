import Link from "next/link";
import React, { FC } from "react";

interface NavLinkProps {
  title: string;
  href: string;
}

export const NavLink: FC<NavLinkProps> = ({ href, title }) => {
  return (
    <li className="mx-3">
      <Link className="text-lg" href={href}>{title}</Link>
    </li>
  );
};
