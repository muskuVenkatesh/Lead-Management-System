import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white p-5 fixed">
      <h1 className="text-2xl font-bold mb-8">Lead Management</h1>
      <nav className="flex flex-col gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 p-2 rounded"
              : "hover:bg-gray-700 p-2 rounded"
          }
        >
          Lead Form
        </NavLink>
        <NavLink
          to="/leads"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 p-2 rounded"
              : "hover:bg-gray-700 p-2 rounded"
          }
        >
          Lead List
        </NavLink>
      </nav>
    </aside>
  );
}
