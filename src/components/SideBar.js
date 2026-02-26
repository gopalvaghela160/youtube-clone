import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Video,
  Radio,
  PlaySquare,
  Clock,
  Music,
  Film,
  Trophy,
} from "lucide-react";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const location = useLocation();

  if (!isMenuOpen) return null;
  // if(!true) return null  //false return null
  // if(!false) return null  //true return jsx

  const menuClass = (path) =>
    `flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition 
    ${
      location.pathname === path
        ? "bg-gray-200 font-semibold"
        : "hover:bg-gray-100"
    }`;

  return (
    <aside className="fixed md:sticky top-16 md:top-0 left-0 z-40 w-64 h-[calc(100vh-4rem)] md:h-screen bg-white border-r border-gray-200 shadow-lg md:shadow-sm p-4 overflow-y-auto transition-transform">
      {/* Main Menu */}
      <nav className="space-y-1">
        <Link to="/" className={menuClass("/")}>
          <Home size={20} />
          Home
        </Link>

        <div className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer transition">
          <PlaySquare size={20} />
          Shorts
        </div>

        <div className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer transition">
          <Video size={20} />
          Videos
        </div>

        <div className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer transition">
          <Radio size={20} />
          Live
        </div>
      </nav>

      {/* Divider */}
      <hr className="my-4 border-gray-200" />

      {/* Subscriptions */}
      <section>
        <h2 className="px-4 text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
          Subscriptions
        </h2>
        <div className="space-y-1">
          <div className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer transition">
            <Trophy size={20} />
            Sports
          </div>
          <div className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer transition">
            <Music size={20} />
            Music
          </div>
          <div className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer transition">
            <Film size={20} />
            Movies
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-4 border-gray-200" />

      {/* Watch Later */}
      <section>
        <h2 className="px-4 text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
          Library
        </h2>
        <div className="space-y-1">
          <div className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer transition">
            <Clock size={20} />
            Watch Later
          </div>
        </div>
      </section>
    </aside>
  );
};

export default SideBar;
