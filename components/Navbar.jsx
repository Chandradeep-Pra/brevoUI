import React from "react";
import logo from "@/public/logo.svg";
import Image from "next/image";
import Button from "./Button";

const Navbar = () => {
  return (
    <header className="flex py-6 px-10 items-center bg-lightGreen justify-between">
      <div className="flex items-center gap-8">
        <Image src={logo} alt="logo" />
        <div className="hidden lg:block">
          <ul className="flex gap-4">
            {["Products", "Pricing", "Resources"].map((item, index) => (
              <li
                key={index}
                className="flex gap-1 text-[16px] font-bold cursor-pointer hover:underline hover:underline-offset-4 text-lg"
              >
                {item}
                {(index % 2 == 0 || index == 0) && (
                  <Image
                    src="./downArrow.svg"
                    alt="arrow"
                    height={16}
                    width={16}
                    className="hover:rotate-180"
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
        <div className="gap-4 items-center hidden lg:flex">
          <Image src="./earth.svg" height={24} width={24} alt="earth" />
          <span className="text-[14px] underline-offset-4 underline text-brandGreen cursor-pointer">
            Log in
          </span>
          <Button btnText="Sign Up Free" btnClasses="bg-brandGreen text-white py-2 px-4 rounded-xl hover:bg-white border-2 border-brandGreen hover:text-brandGreen font-semibold" />
          <Button btnText="Get a demo" btnClasses="bg-transparent text-brandGreen py-2 px-4 rounded-xl border-2 border-brandGreen hover:shadow-2 hover:shadow hover:shadow-4 hover:shadow-brandGreen hover:text-brandGreen font-semibold" />
        </div>
     
    </header>
  );
};

export default Navbar;
