import { useEffect, useRef } from "react";

export function useOnHoverOutside ({ref, handler}: any)  {
  useEffect(
    () => {
      const listener = (event: any) => {
        if (!ref?.current || ref?.current?.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mouseover", listener);
      return () => {
        document.removeEventListener("mouseout", listener);
      };
    },
    [ref, handler]
  );
}