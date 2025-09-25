import React, { useState, useContext, useEffect } from "react";
import { FaCamera } from "react-icons/fa";
import { themeContext } from "../../context/ThemeContext";
import api from "../../Axios/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const AddListingForm = ({ editProduct, setShowModal }) => {
  const { theme } = useContext(themeContext);
  const navigate = useNavigate();
  const { profile } = useSelector((store) => store.auth);

  const [category, setCategory] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [university, setUniversity] = useState([]);
  const [genders, setGenders] = useState([]);

  const [formData, setFormData] = useState({
    productName: editProduct?.productName || "",
    description: editProduct?.description || "",
    brand: editProduct?.brand?._id || "",
    price: editProduct?.price || "",
    campus: editProduct?.campus || "",
    whatsapp: editProduct?.whatsapp || "",
    phone: editProduct?.phone || "",
    gender: editProduct?.gender || "",
    category: editProduct?.category?._id || "",
    subCategory: editProduct?.subCategory?._id || "",
    productImage: null,
  });

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await api.get("/product/categories");
        setCategory(res.data.categories);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);

  // Fetch subcategories when category changes
  const handleCategoryChange = async (e) => {
    const categoryId = e.target.value;
    setFormData({ ...formData, category: categoryId });

    try {
      const res = await api.get(`/product/subCategories/${categoryId}`);
      setSubCategories(res.data.subcategories);
    } catch (error) {
      console.error("Error fetching subcategories", error);
    }
  };

  //Fetch universities
  useEffect(() => {
    const fetchCampus = async () => {
      try {
        const res = await api.get("/product/universities");
        setUniversity(res.data.universities);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCampus();
  }, []);

  // Fetch genders
  useEffect(() => {
    const fetchGender = async () => {
      try {
        const res = await api.get("/product/gender");
        setGenders(res.data.gender);
      } catch (error) {
        console.log(error);
      }
    };
    fetchGender();
  }, []);

  // Handle form submit (Add or Edit)
 const handleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData();
  data.append("productName", formData.productName);
  data.append("description", formData.description);
  data.append("brand", formData.brand);
  data.append("price", formData.price);
  data.append("campus", formData.campus);
  data.append("whatsapp", formData.whatsapp);
  data.append("phone", formData.phone);
  data.append("gender", formData.gender?._id || formData.gender);
  data.append("category", formData.category?._id || formData.category);
  data.append("subCategory", formData.subCategory?._id || formData.subCategory);
  data.append("university", formData.campus);

  if (formData.productImage) {
    Array.from(formData.productImage).forEach((file) => {
      data.append("productImage", file);
    });
  }

  try {
    let res;
    if (editProduct) {
      //  EDIT
      res = await api.put(`/product/${editProduct._id}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (res?.data?.success) {
        toast.success("Product updated successfully");
      }
    } else {
      //  ADD 
      res = await api.post("/product/addProduct", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (res?.data?.success) {
        toast.success("Product added successfully");
      }
    }

    setShowModal(false);
    navigate("/dashboard/listings");
  } catch (error) {
    console.error("Error saving product", error);
    toast.error("Something went wrong!");
  }
};


  return (
    <div
      className={`w-full max-w-4xl mx-auto p-8 rounded-2xl shadow-lg transition-colors duration-300
        ${theme === "dark" ? "bg-gray-900 text-gray-200" : "bg-white text-gray-800"}`}
    >
      <h2 className="text-3xl font-bold text-center mb-8">
        {editProduct ? "Edit Product" : "Add New Product"}
      </h2>

      <form className="space-y-8" onSubmit={handleSubmit}>
        {/* Product Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b pb-2">Product Info</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Product Name */}
            <div>
              <label className="block mb-2 font-medium">Product Name</label>
              <input
                value={formData.productName}
                onChange={(e) =>
                  setFormData({ ...formData, productName: e.target.value })
                }
                type="text"
                className={`w-full rounded-lg px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500
                  ${
                    theme === "dark"
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-300"
                  }`}
                placeholder="e.g. Sneakers"
              />
            </div>

            {/* Price */}
            <div>
              <label className="block mb-2 font-medium">Price (GHS)</label>
              <input
                type="number"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
                className={`w-full rounded-lg px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500
                  ${
                    theme === "dark"
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-300"
                  }`}
                placeholder="Enter price"
              />
            </div>

            {/* Brand */}
            <div>
              <label className="block mb-2 font-medium">Brand</label>
              <input
                type="text"
                value={formData.brand}
                onChange={(e) =>
                  setFormData({ ...formData, brand: e.target.value })
                }
                className={`w-full rounded-lg px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500
                  ${
                    theme === "dark"
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-300"
                  }`}
                placeholder="e.g. Nike"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block mb-2 font-medium">Gender</label>
              <select
                className={`w-full rounded-lg px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500
                  ${
                    theme === "dark"
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-300"
                  }`}
                value={formData.gender}
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
              >
                <option value="">Select Gender</option>
                {genders.map((gender) => (
                  <option key={gender._id} value={gender._id}>
                    {gender.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/*Campus & Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b pb-2">Campus & Contact</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium">Campus</label>
              <select
                value={formData.campus}
                onChange={(e) =>
                  setFormData({ ...formData, campus: e.target.value })
                }
                className={`w-full rounded-lg px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500
                  ${
                    theme === "dark"
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-300"
                  }`}
              >
                <option value="">Select Campus</option>
                {university.map((uni) => (
                  <option key={uni._id} value={uni._id}>
                    {uni.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium">Phone Number</label>
              <input
                type="text"
                value={profile.phone || formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className={`w-full rounded-lg px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500
                  ${
                    theme === "dark"
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-300"
                  }`}
                placeholder="Enter phone number"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">WhatsApp Number</label>
              <input
                type="text"
                value={profile.whatsapp || formData.whatsapp}
                onChange={(e) =>
                  setFormData({ ...formData, whatsapp: e.target.value })
                }
                className={`w-full rounded-lg px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500
                  ${
                    theme === "dark"
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-300"
                  }`}
                placeholder="Enter WhatsApp number"
              />
            </div>
          </div>
        </div>

        {/* Category & Subcategory */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b pb-2">Category</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium">Category</label>
              <select
                value={formData.category}
                onChange={handleCategoryChange}
                className="w-full rounded-lg px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Category</option>
                {category.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {subCategories.length > 0 && (
              <div>
                <label className="block mb-2 font-medium">Subcategory</label>
                <select
                  value={formData.subCategory}
                  onChange={(e) =>
                    setFormData({ ...formData, subCategory: e.target.value })
                  }
                  className="w-full rounded-lg px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select SubCategory</option>
                  {subCategories.map((sub) => (
                    <option key={sub._id} value={sub._id}>
                      {sub.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>

        {/*Description */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b pb-2">Description</h3>
          <textarea
            rows={4}
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className={`w-full rounded-lg px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500
              ${
                theme === "dark"
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-300"
              }`}
            placeholder="Enter product description"
          />
        </div>

        {/*Upload Images */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b pb-2">Upload Images</h3>

          {/*Show current images only when editing */}
          {editProduct?.productImage && (
            <div className="mb-4">
              <p className="font-medium mb-2">Current Image(s):</p>
              <div className="flex gap-4 flex-wrap">
                {(Array.isArray(editProduct.productImage)
                  ? editProduct.productImage
                  : [editProduct.productImage]
                ).map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Product ${index + 1}`}
                    className="w-32 h-32 object-cover rounded-lg border"
                  />
                ))}
              </div>
            </div>
          )}

          <div className="relative">
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) =>
                setFormData({ ...formData, productImage: e.target.files })
              }
              className={`w-full rounded-lg px-4 py-2 pr-10 border focus:outline-none focus:ring-2 focus:ring-blue-500
                ${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-700 text-gray-200 file:text-gray-300"
                    : "bg-white border-gray-300 text-gray-800"
                }`}
            />
            <FaCamera className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500 pointer-events-none" />
            <p className="text-sm mt-2 text-gray-500">
              Max 10MB, multiple files allowed
            </p>
          </div>
        </div>

        {/*Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-8 py-3 rounded-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white transition"
          >
            {editProduct ? "Update Product" : "Add Product"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddListingForm;
