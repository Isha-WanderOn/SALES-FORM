import logo from "../../assets/images/logo.png";
import Image from "next/image";
import { MainDiv, Logo } from "./Navbar.style";
import Link from "next/link";
import { useContext } from "react";
import { Form } from "../../context/FormContext";
import Logout from "../Logout/Logout";
const Navbar = () => {
  const { login, signUp } = useContext(Form);
  return (
    <MainDiv>
      <Logo>
        <Image src={logo} alt="logo" fill />
      </Logo>
      <div style={{ fontSize: "1.8rem", color: "#ffffff" }}>+91-9652365362</div>
      <div>
        {login || signUp ? (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "30vw",
              paddingRight: "5vw",
            }}
          >
            <Link
              style={{
                textDecoration: "none",
                fontSize: "1.6rem",
                fontWeight: "400",
                color: "#ffffff",
              }}
              href={`${signUp}` ? "/" : "/MainPage"}
            >
              Home
            </Link>
            <Link
              style={{
                textDecoration: "none",
                fontSize: "1.6rem",
                fontWeight: "400",
                color: "#ffffff",
              }}
              href="/gallery"
            >
              Gallery
            </Link>
            <Link
              style={{
                textDecoration: "none",
                fontSize: "1.6rem",
                fontWeight: "400",
                color: "#ffffff",
              }}
              href="/blogs"
            >
              Blogs
            </Link>
            <Link
              style={{
                textDecoration: "none",
                fontSize: "1.6rem",
                fontWeight: "400",
                color: "#ffffff",
              }}
              href="/about"
            >
              About Us
            </Link>
            <Logout />
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "30vw",
              paddingRight: "5vw",
            }}
          >
            <Link
              style={{
                textDecoration: "none",
                fontSize: "1.6rem",
                fontWeight: "400",
                color: "#ffffff",
              }}
              href={`${signUp}` ? "/" : "/MainPage"}
            >
              Home
            </Link>
            <Link
              style={{
                textDecoration: "none",
                fontSize: "1.6rem",
                fontWeight: "400",
                color: "#ffffff",
              }}
              href="/gallery"
            >
              Gallery
            </Link>
            <Link
              style={{
                textDecoration: "none",
                fontSize: "1.6rem",
                fontWeight: "400",
                color: "#ffffff",
              }}
              href="/blogs"
            >
              Blogs
            </Link>
            <Link
              style={{
                textDecoration: "none",
                fontSize: "1.6rem",
                fontWeight: "400",
                color: "#ffffff",
              }}
              href="/about"
            >
              About Us
            </Link>
          </div>
        )}
      </div>
    </MainDiv>
  );
};

export default Navbar;
