import { useState, useEffect } from "react";
import { AlignJustify } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`flex items-center justify-between py-4 px-6 fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        scrolled ? "bg-[#E8F2FC] shadow-md" : "bg-transparent"
      }`}>
      <img
        src="/logo.svg"
        alt="logo"
        width="199"
        height="30"
        className="w-auto h-[30px]"
      />
      <AlignJustify size={24} />
    </header>
  );
};

export default Header;
