import React, { useState, useContext, useEffect } from "react";
import { FaCamera } from "react-icons/fa";
import { themeContext } from "../../context/ThemeContext";
import api from "../../Axios/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { updateSellerProfile } from "../../store/features/authSlice";

const AddListingForm = ({ editProduct, setShowModal }) => {
  const { theme } = useContext(themeContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { profile } = useSelector((store) => store.auth);

  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [universities, setUniversities] = useState([]);
  const [genders, setGenders] = useState([]);

  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    brand: "",
    price: "",
    phone: "",
    whatsapp: "",
    gender: "",
    category: "",
    subCategory: "",
    university: "",
    productImage: null,
  });

  // Sync formData when editing a product
  useEffect(() => {
    if (editProduct) {
      setFormData({
        productName: editProduct.productName || "",
        description: editProduct.description || "",
        brand: editProduct.brand || "",
        price: editProduct.price || "",
        phone: editProduct.phone || "",
        whatsapp: editProduct.whatsapp || "",
        gender: editProduct.gender?._id || "",
        category: editProduct.category?._id || "",
        subCategory: editProduct.subCategory?._id || "",
        university: editProduct.university?._id || "",
        productImage: null,
      });
    }
  }, [editProduct]);

  
  useEffect(() => {
    if (editProduct) return;

    const fetchPreviousContact = async () => {
      try {
        const res = await api.get("/product/productbySeller");
        const sellerProducts = res?.data?.productbySeller || [];

        setFormData((prev) => {
          if (prev.phone || prev.whatsapp) return prev;

          if (sellerProducts.length > 0) {
            const lastProduct = sellerProducts[0];
            return {
              ...prev,
              phone: lastProduct.phone || profile?.phone || "",
              whatsapp: lastProduct.whatsapp || profile?.whatsapp || "",
            };
          } else {
            return {
              ...prev,
              phone: profile?.phone || "",
              whatsapp: profile?.whatsapp || "",
            };
          }
        });
      } catch (error) {
        console.log(
          " Could not load previous contact:",
          error?.response?.data?.message
        );
      }
    };

    fetchPreviousContact();
  }, [editProduct, profile]);

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await api.get("/product/categories");
        setCategories(res.data.categories);
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    };
    fetchCategories();
  }, []);

  // Fetch subcategories when category changes
  useEffect(() => {
    if (!formData.category) return;

    const fetchSub = async () => {
      try {
        const res = await api.get(`/product/subcategories/${formData.category}`);
        setSubCategories(res.data.subcategories);
      } catch (error) {
        console.error("Error fetching subcategories", error);
      }
    };
    fetchSub();
  }, [formData.category]);

  // universities
  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const res = await api.get("/product/universities");
        setUniversities(res.data.universities);
      } catch (error) {
        console.error("Error fetching universities", error);
      }
    };
    fetchUniversities();
  }, []);

  //  genders
  useEffect(() => {
    const fetchGenders = async () => {
      try {
        const res = await api.get("/product/gender");
        setGenders(res.data.gender);
      } catch (error) {
        console.error("Error fetching genders", error);
      }
    };
    fetchGenders();
  }, []);

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.productName) return toast.error("Product name is required");
    if (!formData.price) return toast.error("Price is required");
    if (!formData.category) return toast.error("Please select a category");
    if (!formData.subCategory) return toast.error("Please select a subcategory");

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "price") data.append(key, Number(value));
      else if (key !== "productImage") data.append(key, value);
    });

   


    try {
      if (editProduct) {
        // Update product
        const res = await api.put(`/product/${editProduct._id}`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        // Update seller profile (phone & WhatsApp)
        await dispatch(
          updateSellerProfile({
            phone: formData.phone,
            whatsapp: formData.whatsapp,
          })
        );

        if (res?.data?.success) toast.success("Product updated successfully!");
      } else {
        const res = await api.post("/product/addProduct", data, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        if (res?.data?.success) toast.success("Product added successfully!");
      }

      navigate("/dashboard/listings");
    } catch (error) {
      console.error("Error saving product", error);
      toast.error(error?.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div
      className={`w-full max-w-4xl mx-auto p-8 rounded-2xl shadow-lg transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 text-gray-200" : "bg-white text-gray-800"
      }`}
    >
      <h2 className="text-3xl font-bold text-center mb-8">
        {editProduct ? "Edit Product" : "Add New Product"}
      </h2>

      <form className="space-y-8" onSubmit={handleSubmit}>
        {/* Product Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b pb-2">Product Info</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium">Product Name *</label>
              <input
                value={formData.productName}
                onChange={(e) =>
                  setFormData({ ...formData, productName: e.target.value })
                }
                type="text"
                required
                className="w-full rounded-lg px-4 py-2 border focus:ring-2 focus:ring-blue-500"
              />
            </div>

        {/* Price */}
        <div>
          <label className="block mb-2 font-medium">Price (GHS) <span className="text-red-500">*</span></label>
          <input
            type="number"
            value={formData.price}
            step="0.01" 
            required
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            className={`w-full rounded-lg px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500
              ${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"}`}
            placeholder="Enter price"
          />
        </div>

            <div>
              <label className="block mb-2 font-medium">Brand (optional)</label>
              <input
                type="text"
                value={formData.brand}
                onChange={(e) =>
                  setFormData({ ...formData, brand: e.target.value })
                }
                className="w-full rounded-lg px-4 py-2 border focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Gender (optional)</label>
              <select
                value={formData.gender}
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
                className="w-full rounded-lg px-4 py-2 border focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Gender</option>
                {genders.map((g) => (
                  <option key={g._id} value={g._id}>
                    {g.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Campus & Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b pb-2">Campus & Contact</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium">Campus (optional)</label>
              <select
                value={formData.university}
                onChange={(e) =>
                  setFormData({ ...formData, university: e.target.value })
                }
                className="w-full rounded-lg px-4 py-2 border focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Campus</option>
                {universities.map((u) => (
                  <option key={u._id} value={u._id}>
                    {u.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium">Phone *</label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full rounded-lg px-4 py-2 border focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">WhatsApp *</label>
              <input
                type="text"
                value={formData.whatsapp}
                onChange={(e) =>
                  setFormData({ ...formData, whatsapp: e.target.value })
                }
                className="w-full rounded-lg px-4 py-2 border focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Category & Subcategory */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b pb-2">Category</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium">Category *</label>
              <select
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                className="w-full rounded-lg px-4 py-2 border focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {subCategories.length > 0 && (
              <div>
                <label className="block mb-2 font-medium">Subcategory *</label>
                <select
                  value={formData.subCategory}
                  onChange={(e) =>
                    setFormData({ ...formData, subCategory: e.target.value })
                  }
                  className="w-full rounded-lg px-4 py-2 border focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Subcategory</option>
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

        {/* Description */}
        <div>
          <label className="block mb-2 font-medium">Description</label>
          <textarea
            rows={4}
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="w-full rounded-lg px-4 py-2 border focus:ring-2 focus:ring-blue-500"
            placeholder="Enter product description"
          />
        </div>

        {/* Upload Images */}
        <div className="relative">
          <label className="block mb-2 font-medium">Upload Images *</label>

          {/* Show existing images if editing */}
          {editProduct?.productImage && editProduct.productImage.length > 0 && (
            <div className="mb-4 flex gap-4 flex-wrap">
              {editProduct.productImage.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt="Product"
                  className="w-32 h-32 object-cover rounded"
                />
              ))}
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
              className="w-full rounded-lg px-12 py-2 border focus:ring-2 focus:ring-blue-500"
            />
            <FaCamera className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500 text-xl pointer-events-none" />
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg"
          >
            {editProduct ? "Update Product" : "Add Product"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddListingForm;
