import { useContext, useEffect, useState } from "react";
import { useTheme } from "../hooks/theme";
import ThemeContext from "../provider/ThemeProvider";
import { DarkModeSwitch } from "react-toggle-dark-mode";

type ToggleThemeProps = {
  darkThemeIconColor?: string;
  lightThemeIconColor?: string;
};
const ToggleTheme = ({
  darkThemeIconColor,
  lightThemeIconColor,
}: ToggleThemeProps) => {
  const { selectedTheme, selectedThemeDispatch } = useContext(ThemeContext);
  const [isChecked, setIsChecked] = useState(false);

  useTheme();

  useEffect(() => {
    if (selectedTheme.theme) {
      let val = selectedTheme.theme === "light" ? false : true;
      setIsChecked(val);
    }
  }, [selectedTheme]);

  const switchBetweenThemes = () => {
    !isChecked
      ? selectedThemeDispatch({ type: "SET_DARK_MODE", payload: "dark" })
      : selectedThemeDispatch({ type: "SET_LIGHT_MODE", payload: "light" });
    setIsChecked(!isChecked);
  };
  return (
    <div className="flex" onClick={switchBetweenThemes}>
      <DarkModeSwitch
        checked={selectedTheme.theme === "light" ? true : false}
        onChange={() => null}
        size={20}
        sunColor={
          selectedTheme.theme === "light"
            ? lightThemeIconColor || "gray"
            : "white"
        }
        moonColor={darkThemeIconColor || "#009BED"}
      />
    </div>
  );
};

export default ToggleTheme;
