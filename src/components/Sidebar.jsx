import React, { useState } from "react";

import { BiChevronDown, BiMenu } from "react-icons/bi";

const categories = [
  "Fresh Meat",
  "Vegetables",
  "Fruit & Nut Gifts",
  "Fresh Berries",
  "Ocean Foods",
  "Butter & Eggs",
  "Fastfood",
  "Fresh Onion",
  "Papayaya & Crisps",
  "Oatmeal",
  "Fresh Bananas",
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white w-60"
        onClick={() => setOpen(!open)}
      >
        <BiMenu className="w-5 h-5" />
        <span className="font-semibold">All departments</span>
        <BiChevronDown className="ml-auto w-4 h-4" />
      </button>

      {open && (
        <div className="absolute left-0  w-60 bg-white shadow-lg z-50 animate-fade-in">
          <ul className="divide-y divide-gray-100">
            {categories.map((cat, idx) => (
              <li key={idx} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                {cat}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
