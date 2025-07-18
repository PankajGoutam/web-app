import { IconHexagonLetterA, IconInfoCircle, IconClipboard, IconCode, IconBriefcase, IconMail } from "@tabler/icons-react";
import SideBar from "./SideBar";
import { useMediaQuery } from "@mantine/hooks";
import { em } from "@mantine/core";
import { useEffect, useState } from "react";

const links = ["About", "Projects", "Skills", "Experience", "Contact"];
const icons = [
  <IconInfoCircle size={24} />,
  <IconClipboard size={24} />,  // Replaced IconProjector with IconClipboard
  <IconCode size={24} />,
  <IconBriefcase size={24} />,
  <IconMail size={24} />
];

// Function to render navigation links with icons
const navLinks = (col: Boolean, clicked: any) => {
  const handleClick = () => {
    if (clicked) clicked();
  }

  return links.map((link, index) => {
    return (
      <a
        key={index}
        onClick={handleClick}
        className={`${col ? 'flex flex-col items-center' : 'flex items-center gap-2'} text-textColor text-lg font-mono hover:text-primaryColor`}
        href={`#${link}`}
      >
        <span className="text-primaryColor">{icons[index]}</span> {/* Render icon */}
        {link}
      </a>
    );
  })
}

const Header = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(476)})`);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [shadow, setShadow] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 70) setShow(false);
    else setShow(true);
    if (window.scrollY > 70) setShadow(true);
    else setShadow(false);
    setLastScrollY(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  })

  return (
    <nav className={`flex ${show ? "translate-y-0" : "-translate-y-28"} ${shadow ? "shadow-[0px_10px_30px_-10px_#020c1b]" : ""} transition-transform duration-500 ease-in-out fixed w-full z-10 bg-bgColor h-28  px-10 justify-between items-center xs-mx:px-4 xs-mx:h-20 `}>
      <IconHexagonLetterA className="z-10" size={isMobile ? 45 : 60} color="#C084FC" stroke={1.25} />
      <div className="bs:flex gap-8 hidden">
        {navLinks(false, null)} {/* Render navigation links with icons */}
      </div>
      <SideBar />
    </nav>
  );
}

export default Header;
export { navLinks };
