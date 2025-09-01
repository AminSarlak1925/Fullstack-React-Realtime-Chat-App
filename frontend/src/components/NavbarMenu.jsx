import React from "react";
import { FaDragon, FaUserCircle } from "react-icons/fa";

const NavbarMenu = () => {
  return (
    <div className="navbar bg-gradient-to-r from-purple-700 via-pink-600 to-red-600 text-white shadow-xl">
      {/* Left section */}
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-2xl font-bold tracking-widest flex items-center gap-2">
          <FaDragon className="text-3xl" />
          MysticChat
        </a>
      </div>

      {/* Center section */}
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold text-lg">
          <li>
            <a className="hover:text-yellow-300 transition">Home</a>
          </li>
          <li>
            <a className="hover:text-yellow-300 transition">Guilds</a>
          </li>
          <li>
            <a className="hover:text-yellow-300 transition">Quests</a>
          </li>
          <li>
            <a className="hover:text-yellow-300 transition">Marketplace</a>
          </li>
        </ul>
      </div>

      {/* Right section */}
      <div className="flex-none gap-2">
        <button className="btn btn-outline btn-warning">Login</button>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <FaUserCircle className="text-4xl" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black rounded-box w-52"
          >
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarMenu;
