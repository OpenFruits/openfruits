import { HalfMoon, SunLight } from "iconoir-react";
import { useTheme } from "next-themes";
import type { VFC } from "react";
import { useEffect, useState } from "react";

export const ThemeChanger: VFC = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) null;

  const oppositeColor = resolvedTheme === "dark" ? "light" : "dark";
  const handleClick = () => setTheme(oppositeColor);

  return (
    <div className="group relative">
      <button className="text-3xl" onClick={handleClick}>
        {resolvedTheme === "dark" ? <SunLight height={30} /> : <HalfMoon height={30} />}
      </button>
      <div className="hidden group-hover:flex absolute right-1 p-1 w-[120px] text-xs text-center text-gray-500 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg">
        {`Activate ${oppositeColor} mode`}
      </div>
    </div>
  );
};
