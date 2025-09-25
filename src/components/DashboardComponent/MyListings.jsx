import React, { useState, useContext, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import AddProduct from "../DashboardComponent/AddProduct";
import { themeContext } from "../../context/ThemeContext";
import { IoCloseCircleSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { getProductsBySeller } from "../../store/features/productsSlice";
import api from "../../Axios/axios";
import toast from "react-hot-toast";

const MyListings = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [editProduct, setEditProduct] = useState(null);
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.products);
  const { theme } = useContext(themeContext);

  useEffect(() => {
    try {
      dispatch(getProductsBySeller());
    } catch (error) {
      console.log(error);
    }
  }, [])


  const handleDelete = async (productId) => {
  const handleDelete = async (productId) => {
    try {
      const res = await api.delete(`/product/delete/${productId}`)
      console.log(res.data)

      if (res?.data?.success) {
        toast.success(res?.data?.message)
        setShowDeleteModal(false)
        dispatch(getProductsBySeller())
      }

    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div
      className={`p-2 min-h-screen ${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1
          className={`text-xl font-bold ${
            theme === "dark" ? "text-cyan-400" : "text-cyan-900"
          }`}
        >
          My Listings
        </h1>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => {
            setEditProduct(null);
            setEditProduct(null);
            setShowModal(true);
          }}
        >
          + Add New Listing
        </button>
      </div>

      {/* Table wrapper */}
      <div
        className={`rounded-md border w-full ${
          theme === "dark" ? "border-gray-700" : "border-gray-300"
        }`}
      >
        <div className="overflow-x-auto w-full">
          <table
            className={`w-full min-w-[600px] table-auto border-collapse ${
              theme === "dark"
                ? "bg-gray-800 text-gray-200"
                : "bg-white text-gray-800"
            }`}
          >
            <thead
              className={`${
                theme === "dark"
                  ? "bg-gray-900 text-gray-300"
                  : "bg-gray-100 text-gray-600"
              } text-sm text-left`}
            >
              <tr>
                <th className="p-3">Product Name</th>
                <th className="p-3">Category</th>
                <th className="p-3">Sub Category</th>
                <th className="p-3">Price</th>
                <th className="p-3">Edit</th>
                <th className="p-3">Delete</th>
              </tr>
            </thead>
            <tbody>
              {products?.length > 0 ? (
                products.map((product) => (
                  <tr
                    key={product._id}
                    className={`${
                      theme === "dark"
                        ? "border-gray-700 hover:bg-gray-700"
                        : "border-t border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <td className="p-3 flex items-center gap-3">
                      <img
                        src={product.productImage[0]}
                        alt={product.productName}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <span>{product.productName}</span>
                    </td>
                    <td className="p-3">{product?.category?.name}</td>
                    <td className="p-3">{product?.subCategory?.name}</td>
                    <td className="p-3">{new Intl.NumberFormat('en-GH', { style: 'currency', currency: 'GHS' }).format(product.price)}
                    </td>
                    <td className="p-3">
                      <FaEdit
                        className="text-blue-500 cursor-pointer"
                        onClick={() => {
                          setEditProduct(product);
                          setShowModal(true);
                        }}
                      />
                    </td>
                    <td className="p-3" >
                      <FaTrash onClick={() => {
                        setDeleteId(product._id)
                        setShowDeleteModal(true)
                      }}
                        className="text-red-500 cursor-pointer" />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-4 text-gray-500">
                    No products posted yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {showDeleteModal && (
            <div
              id="deleteModal"
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            >
              <div className="bg-white p-6 rounded shadow-lg w-96">
                <h2 className="text-lg font-bold mb-4 text-black">Confirm Delete</h2>
                <p className="mb-4 text-black">Are you sure you want to delete this item?</p>
                <div className="flex justify-end gap-3">
                  <button
                    onClick={() => handleDelete(deleteId)}
                    className="px-4 py-2 bg-red-600 text-white rounded"
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => setShowDeleteModal(false)}
                    className="px-4 py-2 bg-gray-300 rounded"
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 bg-opacity-50">
          <div
            className={`${
              theme === "dark"
                ? "bg-gray-900 text-gray-200"
                : "bg-white text-gray-800"
            } relative p-4 rounded-lg shadow-xl max-h-screen overflow-auto w-full max-w-2xl`}
          >
            <button
              onClick={() => setShowModal(false)}
              className={`${
                theme === "dark"
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-700 hover:text-black"
              } absolute top-2 right-2`}
            >
              <IoCloseCircleSharp size={24} />
            </button>

            {/*Pass both props */}
            
            <AddProduct editProduct={editProduct} setShowModal={setShowModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MyListings;
