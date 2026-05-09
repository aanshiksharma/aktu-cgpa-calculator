import { useState, useEffect, useRef } from "react";
import { BsSun, BsCircleHalf, BsMoon } from "react-icons/bs";
import { themes, useTheme } from "../../hooks/useTheme.jsx";

const DropDown = ({ handleThemeChange, mobile = false }) => {
  return (
    <div
      className={`absolute ${mobile ? "left-0 bottom-[120%] w-full" : "right-0 top-[120%]"} py-2 px-2 bg-surface backdrop-blur-2xl rounded-lg border border-muted/50 shadow shadow-shadow`}
    >
      <ul className="whitespace-nowrap text-sm">
        {themes.map((theme) => (
          <li key={theme.value}>
            <button
              className="flex items-center gap-2 rounded-lg hover:bg-muted/10 w-full px-4 py-2"
              onClick={() => handleThemeChange(theme.value)}
            >
              <span>{theme.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

function ViewModeButton({ className, mobile = false }) {
  const [isFocused, setIsFocused] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { theme, changeTheme } = useTheme();

  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current?.contains(event.target)) {
        setIsDropdownOpen(false);
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleThemeChange = (themeValue) => {
    changeTheme(themeValue);
    setIsDropdownOpen(false);
  };

  return (
    <div ref={wrapperRef} className={`relative z-99 flex ${className}`}>
      <button
        type="button"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onClick={() => setIsDropdownOpen((prev) => !prev)}
        className={`hover:bg-surface ${isFocused ? "bg-surface shadow" : "bg-transparent"} px-3 py-2 rounded-lg text-sm cursor-pointer shadow-shadow flex items-center transition-all ease-out w-full`}
      >
        {theme.icon}

        <span
          className={`overflow-hidden whitespace-nowrap transition-all ease-out duration-700 ${(isFocused && isDropdownOpen) || mobile ? "max-w-40 ml-2" : "max-w-0"}`}
        >
          {theme.label}
        </span>
      </button>

      {isDropdownOpen && (
        <DropDown handleThemeChange={handleThemeChange} mobile={mobile} />
      )}
    </div>
  );
}

export default ViewModeButton;
