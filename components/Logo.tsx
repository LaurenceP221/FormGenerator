import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link
      href={"/"}
      className="font-bold text-3xl bg-gradient-to-r from-red-500 to-orange-500 
  bg-clip-text text-transparent hover:cursor-pointer"
    >
      Form Creator
    </Link>
  );
}

export default Logo;
