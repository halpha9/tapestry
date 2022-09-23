import Link from "next/link";
import React from "react";
import { socialIcons } from "../utils/naviagtion";

function Footer() {
  return (
    <div className="absolute bottom-0 w-full">
      <ul className="mt-auto">
        {socialIcons.map((icon, i) => {
          return (
            <Link key={i} href={icon.href} passHref>
              <a>
                <icon.name color={icon.color} size={42} />;
              </a>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default Footer;
