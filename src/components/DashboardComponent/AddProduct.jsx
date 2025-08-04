import React, { useState } from "react";

const AddListingForm = () => {
  const categories = [
    {
      name: "Home Appliances",
      subcategories: ["Fridges", "Microwaves", "Fans"],
    },
    {
      name: "Fashion",
      subcategories: ["Men", "Women", "Kids"],
    },
    {
      name: "Beauty and Personal Care",
      subcategories: ["Skin Care", "Hair Products", "Makeup"],
    },
    {
      name: "Food and Edibles",
      subcategories: ["Snacks", "Groceries", "Drinks"],
    },
    {
      name: "Services",
      subcategories: ["Hair Styling", "Laundry", "Repairs"],
    },
    {
      name: "Electronics",
      subcategories: ["Phones", "Laptops", "Accessories"],
    },
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
    <div className="bg-white w-full max-w-4xl p-6 rounded-lg overflow-auto">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-center w-full">New Product</h2>
      </div>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 mb-1">Product Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter product name"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Price</label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter price"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Category</label>
          <select
            className="w-full border border-gray-300 rounded px-3 py-2"
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

        {selectedSubcategories.length > 0 ? (
          <>
            <div className="w-full">
              <label className="block text-gray-700 mb-1">Subcategory</label>
              <select
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={selectedSubcategory}
                onChange={(e) => setSelectedSubcategory(e.target.value)}
              >
                <option value="">Select Subcategory</option>
                {selectedSubcategories.map((sub) => (
                  <option key={sub}>{sub}</option>
                ))}
              </select>
            </div>

            <div className="w-full">
              <label className="block text-gray-700 mb-1">Upload File</label>
              <input
                type="file"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
              <p className="text-sm text-gray-500 mt-1">Max 18MB</p>
            </div>
          </>
        ) : (
          <div className="md:col-span-2">
            <label className="block text-gray-700 mb-1">Upload File</label>
            <input
              type="file"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            <p className="text-sm text-gray-500 mt-1">Max 18MB</p>
          </div>
        )}

        <div className="md:col-span-2">
          <label className="block text-gray-700 mb-1">Description</label>
          <textarea
            rows={4}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter product description"
          ></textarea>
        </div>

        <div className="md:col-span-2 flex justify-center">
          <button
            type="submit"
            className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddListingForm;
