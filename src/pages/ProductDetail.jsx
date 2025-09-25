import React, { useState, useContext, useEffect } from "react"
import { FaWhatsapp, FaPhone } from "react-icons/fa"
import { IoArrowBack } from "react-icons/io5"
import { Link, useParams, useNavigate } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { themeContext } from "../context/ThemeContext" 
import { getProductById } from "../store/features/productsSlice"
import ProductImageCarousel from "../helpers/ProductImageCarousel"
import api from "../Axios/axios";

const ProductDetail = () => {
  const { theme } = useContext(themeContext)
  const { productId } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { products } = useSelector((state) => state.products)
  const [similarProductss, setSimilarProductss] = useState([])

  useEffect(() => {
    dispatch(getProductById(productId))
  }, [dispatch, productId])

  
  useEffect(() => {
     if (!products?.subCategory?._id) return;

    const fetchSimilarProducts = async() => {
      try {
        const res = await api.get(`/product/similarProducts/${products?.subCategory?._id}/${products?._id}`)
        console.log(res.data.similarProducts)
        setSimilarProductss(res.data.similarProducts)
      } catch (error) {
        console.log(error)
      }
    }
    fetchSimilarProducts()
  }, [products?.subCategory?._id, products?._id])

  return (
    <div className={`min-h-screen py-12 px-6 ${theme === "dark" ? "bg-gray-900" : "bg-gray-100"}`}>
      <div className="max-w-6xl mx-auto">
        
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 mb-6 text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400"
        >
          <IoArrowBack size={20} />
          Back
        </button>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 rounded-xl shadow-lg p-6 ${theme === "dark" ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800"}`}>
         
          <div className="flex items-center justify-center">
            <ProductImageCarousel images={products.productImage} />
          </div>

          
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">{products.productName}</h1>
            <p className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
              {products.description}
            </p>
            <h3 className="text-sm flex gap-1">
              <span className="text-gray-500">Brand:</span> {products.brand}
            </h3>
            <div className="text-xl font-semibold">
              {new Intl.NumberFormat("en-GH", { style: "currency", currency: "GHS" }).format(products.price)}
            </div>

            <div className="flex gap-1 text-sm">
              <span className="text-gray-500">Location/Campus:</span> {products?.university?.name}
            </div>
            <div className="flex gap-1 text-sm">
              <span className="text-gray-500">Gender:</span> {products?.gender?.name}
            </div>

            
            <div className="flex items-center gap-4 pt-4">
              <Link 
                to={`/sellerProfile/${products.Seller}`}
                className="px-6 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white"
              >
                View Seller's Profile
              </Link>
              <a
                href={`https://wa.me/${products.whatsapp}?text=${encodeURIComponent(`Hello, I'm interested in the "${products.productName}". Could you provide more details?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full border-2"
                style={{ backgroundColor: "#25D366", borderColor: "#128C7E" }}
              >
                <FaWhatsapp size={20} className="text-white" />
              </a>
              <a
                href={`tel:${products.phone}`}
                className="flex items-center justify-center w-10 h-10 rounded-full border-2"
                style={{ backgroundColor: "#3b82f6", borderColor: "#1e40af" }}
              >
                <FaPhone size={20} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {similarProductss?.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-semibold mb-6">Similar Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {similarProductss.map((item) => (
                <div key={item._id} className="rounded-lg shadow hover:shadow-md transition bg-white dark:bg-gray-700">
                  <img
                    src={item.productImage[0]}
                    alt={item.productName}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <p className="font-medium">{item.productName}</p>
                    <p className="text-sm text-gray-500">{item?.category?.name}</p>
                    <p className="text-blue-500 font-semibold">
                      {new Intl.NumberFormat("en-GH", { style: "currency", currency: "GHS" }).format(item.price)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )} 
      </div>
    </div>
  );
};

export default ProductDetail;
