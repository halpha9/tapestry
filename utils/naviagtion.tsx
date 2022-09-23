import { useRouter } from "next/router";
import { FaTiktok } from "react-icons/fa";
import { FiTwitter, FiInstagram } from "react-icons/fi";

export function NavigationInfo() {
  const router = useRouter();
  const navigataion = [
    {
      id: 1,
      current: router.route.includes("/shipping") ? true : false,
      href: "/shipping",
      name: "Shipping",
    },
    {
      id: 2,
      current: router.route.includes("/products") ? true : false,
      href: "/products",
      name: "Products",
    },
    {
      id: 3,
      current: router.route.includes("/sign-up") ? true : false,
      href: "/sign-up",
      name: "Sign Up",
    },
    {
      id: 4,
      current: router.route.includes("/sizing") ? true : false,
      href: "/sizing",
      name: "Sizing",
    },
    {
      id: 5,
      current: router.route.includes("/terms") ? true : false,
      href: "/terms",
      name: "Terms",
    },
  ];
  return navigataion;
}
export const socialIcons = [
  { href: "https://tiktok.com", color: "#010101", name: FaTiktok },
  { href: "https://tiktok.com", color: "#1da1f2", name: FiTwitter },
  { href: "https://tiktok.com", color: "#1877f2", name: FiInstagram },
];
