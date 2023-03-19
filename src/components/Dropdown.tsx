// import logo from "./../logo.svg";
import { useState, useRef } from "react";
import { useOnHoverOutside } from "./useOnHoverOutside";
import Menu from "./menu";

export function Header() {
  const dropdownRef = useRef(null); // Create a reference for dropdown container
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

  // Function to close dropdown
  const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
  };

  useOnHoverOutside(dropdownRef, closeHoverMenu); // Call the hook

  return (
    <div className="flex justify-center header">
      <div className="container container-mobile flex justify-between laptop1280:py-[15px] py-[20px]">
        <div className="flex items-center">
          <a className="font-bold text-[30px]" href="/">
            <img src={"logo"} className="w-[80%]" alt="" />
          </a>
          <div className="ml-[62px] mobile:hidden" ref={dropdownRef}>
            <button
              className="text-dark-grey-100"
              onMouseOver={() => setMenuDropDownOpen(true)} //use mouseover event to show dropdown
            >
              Hover Menu
            </button>

            {isMenuDropDownOpen && <Menu />} 
          </div>
        </div>
        {/* <div class="flex items-center font-bold mobile:hidden">
          <a href class="mr-[50px] text-dark-green cursor-pointer">
            Login
          </a>
          <a
            href
            class="signup-button bg-green-500 text-white rounded-[30px] cursor-pointer"
          >
            Get Started Free
          </a>
        </div> */}
      </div>
    </div>
  );
}