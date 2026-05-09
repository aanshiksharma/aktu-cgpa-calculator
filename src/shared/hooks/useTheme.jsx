import { useState, useEffect } from "react";
import { BsSun, BsMoon, BsCircleHalf } from "react-icons/bs";

const size = 18;
export const themes = [
  {
    label: "Light Mode",
    value: "light",
    icon: <BsSun size={size} />,
  },
  {
    label: "Dark Mode",
    value: "dark",
    icon: <BsMoon size={size} />,
  },
  {
    label: "System",
    value: "system",
    icon: <BsCircleHalf size={size} />,
  },
];

export const useTheme = () => {
  const defaultTheme = themes[2];
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    const existingTheme = localStorage.getItem("theme");

    if (
      existingTheme &&
      themes.map((theme) => theme.value).includes(existingTheme)
    )
      changeTheme(existingTheme);
  }, []);

  const changeTheme = (themeValue) => {
    const html = document.documentElement;
    html.classList.remove("light", "dark");

    if (themeValue === "light") html.classList.add("light");
    if (themeValue === "dark") html.classList.add("dark");

    localStorage.setItem("theme", themeValue);

    const currentTheme = themes.find((theme) => theme.value === themeValue);
    if (currentTheme) setTheme(currentTheme);
  };

  return { theme, changeTheme };
};
