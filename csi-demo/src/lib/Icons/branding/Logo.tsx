import React from "react";
import csiLogo from "./../../../../public/images/csi.png"; // Assuming csi.png is in the images folder
import Image from "next/image";


const Logo = () => (
  <Image
    src={csiLogo}
    alt="CSI Logo"
    width={50}
    height={50}
  />
);

export default Logo;

