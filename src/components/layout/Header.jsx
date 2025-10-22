import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiSun, HiMoon, HiBars3 } from "react-icons/hi2";
import NavLinks from "./NavLinks";
import { NAV_ITEMS, isPathActive } from "../../utils/navigation";
import UserMenu from "./UserMenu";
import useTheme from "../../hooks/useTheme";

export default function Header() {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);
  const { theme, toggleTheme } = useTheme("dark");
  const location = useLocation();
  const isNavItemActive = (path) => isPathActive(path, location.pathname);

  return (
    <header className="navbar bg-base-100 shadow-lg px-4 w-full flex items-center justify-between relative">
      {/* 左側 - Logo + 漢堡按鈕 */}
      <div className="flex items-center gap-2">
        <button
          className="btn btn-ghost md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <HiBars3 className="w-6 h-6" />
        </button>

        <Link
          to="/"
          className="btn btn-ghost text-lg font-bold text-primary hover:text-primary-focus transition-colors duration-200"
        >
          🍔 早餐時光
        </Link>
      </div>

      {/* 中間 - 導覽列（桌機） */}
      <div className="hidden md:flex flex-1 justify-center">
        <NavLinks
          items={NAV_ITEMS}
          isActive={isNavItemActive}
          listClassName="menu menu-horizontal px-1 flex gap-4"
        />
      </div>

      {/* 右側 - 使用者選單 */}
      {/*主題切換按鈕*/}
      <div className="flex items-center gap-2">
        <button
          onClick={toggleTheme}
          aria-label="切換主題"
          className="btn btn-ghost btn-circle border-2 bg-base-300">
            {theme === "dark" ? ( <HiMoon className="w-6 h-6"/> ) : ( <HiSun className="w-6 h-6"/>)}
        </button>
        <UserMenu />
      </div>

      {/* 小螢幕選單（點漢堡才顯示） */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-base-100 z-[9999] border-t border-base-300 shadow-lg md:hidden animate-fadeIn">
          <NavLinks
            items={NAV_ITEMS}
            isActive={isNavItemActive}
            onItemClick={() => setIsMenuOpen(false)}
            listClassName="menu menu-compact p-2 w-full"
          />
        </div>
      )}
    </header>
  );
}
