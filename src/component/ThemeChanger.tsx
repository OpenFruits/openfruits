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
    <button className="text-3xl" onClick={handleClick}>
      {resolvedTheme === "dark" ? <SunLight height={30} /> : <HalfMoon height={30} />}
    </button>
  );
};
