import useLocalStorage from "./useLocalStorage";
import { useEffect } from "react";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("dark-mode", false);

  useEffect(() => {
    if (darkMode === true) {
      document.querySelector("body").classList.add("dark-mode");
    } else {
      document.querySelector("body").classList.remove("dark-mode");
    }
  }, [storedValue]);
  return [darkMode, setDarkMode];
};

export default useDarkMode;
