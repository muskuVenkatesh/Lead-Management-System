import React from "react";
export default function Sidebar() {
  return (
    <aside className="w-64 h-full bg-gray-800 text-white p-5">
      <h1 className="text-2xl font-bold mb-8">Lead Manager</h1>
      <nav className="flex flex-col gap-4">
        <a href="#" className="hover:bg-gray-700 p-2 rounded">Dashboard</a>
        <a href="#" className="hover:bg-gray-700 p-2 rounded">Create Lead</a>
        <a href="#" className="hover:bg-gray-700 p-2 rounded">Lead List</a>
      </nav>
    </aside>
  );
}
