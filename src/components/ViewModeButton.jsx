import { useState, useEffect, useRef } from "react";
import { BsSun, BsCircleHalf, BsMoon } from "react-icons/bs";

const size = 18;
const modes = [
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

const DropDown = ({ handleModeChange }) => {
  return (
    <div className="absolute right-0 top-[120%] py-2 px-2 backdrop-blur-2xl rounded-lg border border-muted/50">
      <ul className="whitespace-nowrap text-sm">
        {modes.map((mode) => (
          <li key={mode.value}>
            <button
              className="flex items-center gap-2 rounded-lg hover:bg-muted/10 w-full px-4 py-2"
              onClick={() => handleModeChange(mode.value)}
            >
              <span>{mode.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

function ViewModeButton() {
  const [isFocused, setIsFocused] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [viewMode, setViewMode] = useState({
    label: "System",
    value: "system",
    icon: <BsCircleHalf size={size} />,
  });

  const wrapperRef = useRef(null);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme !== "system") handleModeChange(theme);

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

  const SetViewMode = (modeValue) => {
    const currentMode = modes.filter((mode) => mode.value === modeValue)[0];
    setViewMode(currentMode);
  };

  const handleModeChange = (mode) => {
    const html = document.documentElement;
    html.classList.remove("light", "dark");

    if (mode === "light") html.classList.add("light");
    if (mode === "dark") html.classList.add("dark");

    localStorage.setItem("theme", mode);
    SetViewMode(mode);

    setIsDropdownOpen(false);
  };

  return (
    <div ref={wrapperRef} className="relative z-99 flex justify-end">
      <button
        type="button"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onClick={() => setIsDropdownOpen((prev) => !prev)}
        className={`hover:bg-surface ${isFocused ? "bg-surface shadow" : "bg-transparent"} px-3 py-2 rounded-lg text-sm cursor-pointer shadow-shadow flex items-center transition-all ease-out`}
      >
        {viewMode.icon}

        <span
          className={`overflow-hidden whitespace-nowrap transition-all ease-out duration-700 ${isFocused && isDropdownOpen ? "max-w-40 ml-2" : "max-w-0"}`}
        >
          {viewMode.label}
        </span>
      </button>

      {isDropdownOpen && <DropDown handleModeChange={handleModeChange} />}
    </div>
  );
}

export default ViewModeButton;
