import type { VFC } from "react";
import { NavLinks } from "src/component/NavLinks";
import { ThemeChanger } from "src/component/ThemeChanger";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/profile", label: "Profile" },
  { href: "/experience", label: "Experience" },
];

export const Header: VFC = () => {
  return (
    <header className="mx-4 border-b">
      <div className="flex justify-between pt-4">
        <h1 className="text-4xl font-extralight">@ OpenFruits</h1>
        <ThemeChanger />
      </div>
      <nav className="text-gray-500 dark:text-gray-400">
        {NAV_ITEMS.map((item) => {
          const { href, label } = item;
          return (
            <NavLinks key={href} href={href} activeClass="text-black dark:text-white">
              <a className="inline-block p-4">{label}</a>
            </NavLinks>
          );
        })}
      </nav>
    </header>
  );
};
