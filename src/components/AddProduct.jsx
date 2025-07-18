import { useState } from "react";
import { useNavigate } from "react-router";

const AddProduct = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    price: "",
    campus: "",
    category: "",
    type: "",
    brand: "",
    gender: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.productName ||
      !formData.description ||
      !formData.price ||
      !formData.campus ||
      !formData.category ||
      !formData.type ||
      !formData.brand ||
      !formData.gender
    ) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    navigate("/dashboard"); 
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <form
        onSubmit={handleSubmit}
        className="bg-[rgb(46,123,175)] w-full max-w-lg p-6 space-y-4 rounded-md"
      >
        <h2 className="text-2xl font-semibold text-white text-center">
          Add Product
        </h2>

        <input
          type="text"
          name="productName"
          placeholder="Enter Product Name"
          value={formData.productName}
          onChange={handleChange}
          className="w-full bg-white text-black font-normal py-3 px-4 border border-gray-200 rounded-md"
        />

        <input
          type="text"
          name="description"
          placeholder="Enter Product Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full bg-white text-black font-normal py-3 px-4 border border-gray-200 rounded-md"
        />

        <input
          type="text"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="w-full bg-white text-black font-normal py-3 px-4 border border-gray-200 rounded-md"
        />

        <input
          type="text"
          name="campus"
          placeholder="University/Campus"
          value={formData.campus}
          onChange={handleChange}
          className="w-full bg-white text-black font-normal py-3 px-4 border border-gray-200 rounded-md"
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full bg-white text-black font-normal py-3 px-4 border border-gray-200 rounded-md"
        >
          <option value="">Select Fashion Category</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Unisex">Unisex</option>
        </select>

        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full bg-white text-black font-normal py-3 px-4 border border-gray-200 rounded-md"
        >
          <option value="">Shoes, Accessories etc</option>
          <option value="Gold necklace">Gold necklace</option>
          <option value="Silver earrings">Silver earrings</option>
          <option value="Watch">Watch</option>
        </select>

        <input
          type="text"
          name="brand"
          placeholder="Brand name"
          value={formData.brand}
          onChange={handleChange}
          className="w-full bg-white text-black font-normal py-3 px-4 border border-gray-200 rounded-md"
        />

        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full bg-white text-black font-normal py-3 px-4 border border-gray-200 rounded-md"
        >
          <option value="">Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Trans-gender">Trans-gender</option>
        </select>

        <input
          type="file"
          className="w-full bg-white text-black border border-gray-200 rounded-md py-3 px-4"
        />
        <label className="text-white font-normal">Max size 2MB</label>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-5 py-2 rounded-lg bg-[#3690cc] hover:bg-blue-900 text-white transition duration-200 font-semibold"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
