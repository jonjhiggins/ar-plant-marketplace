import { DefaultTheme } from "styled-components";

export const colors = {
  white: "#ffffff",
  bodyText: "#666",
  borderGrey: "#ececec"
};

export const shadow = "0 2px 10px rgba(0,0,0,0.66)";

export const text = {
  s: "12px",
  m: "14px",
  l: "16px"
};

const theme: DefaultTheme = {
  colors,
  shadow,
  text
};

export default theme;
