import Link from "next/link";
import { useState, useEffect } from "react";
import Toggle from "../components/toggle";
import Menu from "../components/menu";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  const handleScroll = () => {
    window.pageYOffset > 5 ? setScrolled(true) : setScrolled(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`py-4 sticky top-0 bg-white ${scrolled && `border-b`}`}>
      <div className="container flex items-center justify-between">
        <Link href="/">
          <a href="/" className="z-10">
            <img className="h-12" src="/logo.png" alt="logo" />
          </a>
        </Link>
        <Toggle open={open} toggle={toggle} />
        <Menu open={open} />
      </div>
    </header>
  );
};

export default Header;
