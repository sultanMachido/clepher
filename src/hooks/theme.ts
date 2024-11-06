import { useContext, useEffect } from "react";
import ThemeContext from "../provider/ThemeProvider";

export const useTheme = () => {
  const { selectedThemeDispatch } = useContext(ThemeContext);
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      selectedThemeDispatch({
        type: "SET_DARK_MODE",
        payload: "dark",
      });
    } else {
      document.documentElement.classList.remove("dark");
      selectedThemeDispatch({
        type: "SET_LIGHT_MODE",
        payload: "light",
      });
    }
  }, [localStorage.theme]);
};

export const useSelectedTheme = () => {
  const { selectedTheme } = useContext(ThemeContext);
  const { theme } = selectedTheme;

  return theme;
};
