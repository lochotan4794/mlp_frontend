import React from "react";
import { useState, useRef, useEffect } from "react";
import Menu from "./menu";

export function Header() {
  const dropdownRef = useRef<HTMLInputElement>(null);
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

  // Function to close dropdown
  const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
  };

  useEffect(
    () => {
      const listener = (event: any) => {
        if (!dropdownRef?.current || dropdownRef?.current?.contains(event.target)) {
          console.log("NULL");
          return;
        }
        closeHoverMenu();
      };
      document.addEventListener("mouseover", listener);
      return () => {
        document.removeEventListener("mouseout", listener);
      };
    },
    [dropdownRef, closeHoverMenu]
  );

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <button
        className="dropdown-button"
        onMouseOver={() => setMenuDropDownOpen(true)} //use mouseover event to show dropdown
      >
        Research
      </button>
      {isMenuDropDownOpen && <Menu />}
    </div>
  );
}