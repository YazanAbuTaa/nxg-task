import React from "react";
import Link from "next/link";

const MainLogo = () => {
  return (
    <Link href="/">
        <img src="./main-logo.png" style={{ width: "50%", height: "auto" }} />
    </Link>
  );
};

export default MainLogo;
