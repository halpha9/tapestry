import Link from "next/link";
import React from "react";
import { NavigationInfo } from "../utils/naviagtion";

function Navbar() {
  const naviagtion = NavigationInfo();
  return (
    <div>
      <ul>
        {naviagtion.map((item) => {
          return (
            <Link href={item.href} key={item.id} passHref>
              <a>
                <li>{item.name}</li>
              </a>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default Navbar;
