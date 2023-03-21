import { useState } from "react";

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [showIndex, setShowIndex] = useState("Login");

  function toggle(index:any) {
    setIsShowing(!isShowing);
    setShowIndex(index);
    // console.log(index);
  }

  return {
    isShowing,
    toggle,
    showIndex,
  };
};

export default useModal;
