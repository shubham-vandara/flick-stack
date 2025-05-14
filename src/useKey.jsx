import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }

      document.addEventListener("keydown", callback);

      // FOR CLEANUP
      // This function will be called when the component unmounts
      // or when the dependencies change
      // It removes the event listener
      // to prevent memory leaks
      // and to avoid multiple event listeners being added
      // when the component re-renders
      // This is a good practice to avoid memory leaks
      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [action, key]
  );
}
