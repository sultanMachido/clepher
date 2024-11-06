/* eslint-disable no-unused-vars */
import { createContext, Dispatch } from "react";

export type ThemeState = {
  theme: string;
};

type Action = {
  type: string;
  payload: string;
};

export type ThemeContextType = {
  selectedTheme: ThemeState;
  selectedThemeDispatch: Dispatch<Action>;
};

export const selectedTheme = { theme: "" };

const contextObject = {
  selectedTheme: { theme: "light" },
  selectedThemeDispatch: () => null,
};

export const selectedThemeReducer = (
  state: ThemeState,
  action: Action
): ThemeState => {
  switch (action.type) {
    case "SET_LIGHT_MODE":
      localStorage.theme = "light";
      return { ...state, theme: action.payload };
    case "SET_DARK_MODE":
      localStorage.theme = "dark";
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

const ThemeContext = createContext<ThemeContextType>(contextObject);

export default ThemeContext;
