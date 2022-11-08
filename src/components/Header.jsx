import React from "react";
import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Header = () => {
  return (
    <header className="fixed z-50 w-screen p-6 px-16  ">
      {/*destop&tablet*/}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="w-10 object-cover" />
          <p className="text-headingColor text-x1 font-bold">Food Delivery</p>
        </div>

        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Home
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Menu
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              About Us
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Service
            </li>
          </ul>

          <div className="relative flex items-center justify-center">
            <AiOutlineShoppingCart className="text-textColor text-3x1 cursor-pointer" />
            <div className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">3</p>
            </div>
          </div>
          <img
            src={Avatar}
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-x1"
            alt="avatar"
          />
        </div>
      </div>
      <div className="flex md:hidden w-full h-full bg-blue-600 p-4"></div>
    </header>
  );
};

export default Header;
