import { FaBars, FaGithub, FaLinkedin } from "react-icons/fa6";
import Logo from "../assets/Logo.png";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed flex justify-between h-20 w-full items-center px-4 bg-slate-900">
      <div className="">
        <img className="h-40 w-auto" src={Logo} alt="Logo" />
      </div>

      <ul className="hidden md:flex font-semibold">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* RESPONSIVE SCREEN */}
      <div
        className="md:hidden cursor-pointer z-10 text-white"
        onClick={handleClick}
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute flex flex-col items-center justify-center top-0 right-0 h-[200px] w-[200px] bg-slate-900 mt-10"
        }
      >
        <li className="py-4 text-[14px]">
          <Link to="home" smooth={true} duration={500} onClick={handleClick}>
            Home
          </Link>
        </li>
        <li className="py-4 text-[14px]">
          <Link to="about" smooth={true} duration={500} onClick={handleClick}>
            About
          </Link>
        </li>
        <li className="py-4 text-[14px]">
          <Link to="skills" smooth={true} duration={500} onClick={handleClick}>
            Skills
          </Link>
        </li>
        <li className="py-4 text-[14px]">
          <Link to="contact" smooth={true} duration={500} onClick={handleClick}>
            Contact
          </Link>
        </li>
      </ul>

      {/* SOCIAL MEDIA */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              href="https://www.linkedin.com/in/nathaniel-idyege-a39044245"
              className="w-full flex justify-between items-center text-gray-300"
            >
              LinkedIn <FaLinkedin size={30} />{" "}
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-700">
            <a
              href="https://github.com/IdyegeNathaniel"
              className="w-full flex justify-between items-center text-gray-300"
            >
              GitHub <FaGithub size={30} />{" "}
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#398676]">
            <a
              href="src\assets\Resume.pdf"
              className="w-full flex justify-between items-center text-gray-300"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
