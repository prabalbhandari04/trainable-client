import { createContext } from "react";

export const backgroundColors = {
  blue: "blue",
  
};

export const BackgroundColorContext = createContext({
  color: backgroundColors.blue,
  changeColor: (color) => {},
});
