import Link from "next/link";
import {  styled } from "@mui/material";

import Image from "next/image";

const LinkStyled = styled(Link)(() => ({
  // height: "70px",
  // width: "180px",
  overflow: "hidden",
  display: "block",
  // letterSpacing:"0.5px",
  textDecoration: "none",
  color: " black",
  fontWeight:"700",
  fontFamily:"montserrat"
}));

const Logo = () => {
  return (
    <>
    <LinkStyled href="/" >
      {/* <h2>POCKETWISE</h2> */}

        <div className="logostyle">
             
        <Image className="inline-block m-2 logoimg" src="/images/logos/logo.png" alt="logo" height={36} width={36} priority />
      <h2 className="logo-text">Pocketwise</h2>
        </div>
      </LinkStyled> 
    </>
  );
};

export default Logo;
