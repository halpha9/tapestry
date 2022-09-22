import type { NextPage } from "next";
import Link from "next/link";
import { NavigationInfo, socialIcons } from "../utils/naviagtion";

const Home: NextPage = () => {
  const navigation = NavigationInfo();
  return <div className="h-screen container">THIS IS THE HOME PAGE</div>;
};

export default Home;
