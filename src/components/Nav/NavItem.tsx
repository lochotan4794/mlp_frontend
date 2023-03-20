import Link from "next/link";
import React from "react";


const NavItem = ({ text, href, active }: any) => {
  return (
    <a className={`nav__link`} href={href}>
      {text}
    </a>
  );
};

export default NavItem;