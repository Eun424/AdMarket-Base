import React, { useState, useContext } from "react";
import { FaCamera } from "react-icons/fa";
import { themeContext } from "../../context/ThemeContext";
;

const AddListingForm = () => {
  const { theme } = useContext(themeContext);

  const categories = [
    { name: "Home Appliances", subcategories: ["Fridges", "Microwaves", "Fans"] },
    { name: "Fashion", subcategories: ["Men", "Women", "Kids"] },
    { name: "Beauty and Personal Care", subcategories: ["Skin Care", "Hair Products", "Makeup"] },
    { name: "Food and Edibles", subcategories: ["Snacks", "Groceries", "Drinks"] },
    { name: "Services", subcategories: ["Hair Styling", "Laundry", "Repairs"] },
    { name: "Electronics", subcategories: ["Phones", "Laptops", "Accessories"] },
  ];

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  const handleCategoryChange = (e) => {
    const selected = e.target.value;
    setSelectedCategory(selected);
    const found = categories.find((cat) => cat.name === selected);
    setSelectedSubcategories(found ? found.subcategories : []);
    setSelectedSubcategory("");
  };

  return (
    <div
      className={`w-full max-w-4xl p-6 rounded-lg overflow-auto transition-colors duration-300
        ${theme === "dark" ? "bg-gray-900 text-gray-200" : "bg-white text-gray-800"}`}
    >
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-center w-full">New Product</h2>
      </div>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Product Name */}
        <div>
          <label className="block mb-1">Product Name</label>
          <input
            type="text"
            className={`w-full rounded px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-400
              ${theme === "dark" ? "bg-gray-800 border-gray-700 text-gray-200" : "bg-white border-gray-300 text-gray-800"}`}
            placeholder="Enter product name"
          />
        </div>

        {/* Brand */}
        <div>
          <label className="block mb-1">Brand</label>
          <input
            type="text"
            className={`w-full rounded px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-400
              ${theme === "dark" ? "bg-gray-800 border-gray-700 text-gray-200" : "bg-white border-gray-300 text-gray-800"}`}
            placeholder="Enter brand name"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block mb-1">Price</label>
          <input
            type="number"
            className={`w-full rounded px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-400
              ${theme === "dark" ? "bg-gray-800 border-gray-700 text-gray-200" : "bg-white border-gray-300 text-gray-800"}`}
            placeholder="Enter price"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block mb-1">Category</label>
          <select
            className={`w-full rounded px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-400
              ${theme === "dark" ? "bg-gray-800 border-gray-700 text-gray-200" : "bg-white border-gray-300 text-gray-800"}`}
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat.name} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        {/* Subcategory + Upload */}
        {selectedSubcategories.length > 0 ? (
          <>
            <div className="w-full">
              <label className="block mb-1">Subcategory</label>
              <select
                className={`w-full rounded px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-400
                  ${theme === "dark" ? "bg-gray-800 border-gray-700 text-gray-200" : "bg-white border-gray-300 text-gray-800"}`}
                value={selectedSubcategory}
                onChange={(e) => setSelectedSubcategory(e.target.value)}
              >
                <option value="">Select Subcategory</option>
                {selectedSubcategories.map((sub) => (
                  <option key={sub}>{sub}</option>
                ))}
              </select>
            </div>

            <div className="relative w-full">
              <label className="block mb-1">Upload File</label>
              <input
                type="file"
                className={`w-full rounded px-3 py-2 pr-10 border focus:outline-none focus:ring-2 focus:ring-blue-400
                  ${theme === "dark" ? "bg-gray-800 border-gray-700 text-gray-200 file:text-gray-300" : "bg-white border-gray-300 text-gray-800"}`}
              />
              <FaCamera className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500 pointer-events-none" />
              <p className="text-sm mt-1 text-gray-500">Max 18MB</p>
            </div>
          </>
        ) : (
          <div className="relative w-full md:col-span-2">
            <label className="block mb-1">Upload File</label>
            <input
              type="file"
              className={`w-full rounded px-3 py-2 pr-10 border focus:outline-none focus:ring-2 focus:ring-blue-400
                ${theme === "dark" ? "bg-gray-800 border-gray-700 text-gray-200 file:text-gray-300" : "bg-white border-gray-300 text-gray-800"}`}
            />
            <FaCamera className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500 pointer-events-none" />
            <p className="text-sm mt-1 text-gray-500">Max 18MB</p>
          </div>
        )}

        {/* Description */}
        <div className="md:col-span-2">
          <label className="block mb-1">Description</label>
          <textarea
            rows={4}
            className={`w-full rounded px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-400
              ${theme === "dark" ? "bg-gray-800 border-gray-700 text-gray-200" : "bg-white border-gray-300 text-gray-800"}`}
            placeholder="Enter product description"
          ></textarea>
        </div>

        {/* Submit */}
        <div className="md:col-span-2 flex justify-center">
          <button
            type="submit"
            className={`px-6 py-2 rounded font-semibold transition
              ${theme === "dark" ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-gray-800 hover:bg-gray-700 text-white"}`}
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddListingForm;
