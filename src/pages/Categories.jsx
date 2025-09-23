import React, { useState, useContext, useEffect } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { getCategories, getSubCategories } from '../store/features/categorySlice'
import { filterBySubCategory } from '../store/features/productsSlice'
import { themeContext } from '../context/ThemeContext'
import Loader from '../helpers/Loader'

const Categories = () => {
  const { categories, subCategories, loadingCategories, error } = useSelector((state) => state.category)
  const dispatch = useDispatch()
  // const {categoryId} = useParams()
  const navigate = useNavigate()
  const { theme } = useContext(themeContext)

  const [activeTooltip, setActiveTooltip] = useState(null)

  useEffect(() => {
    dispatch(getCategories())
  }, [])

  if(loadingCategories) return <Loader message='Fetching categories.....'/>
  if(error) return <div>{error}</div>


  const handleSubCategoryClick = (subCategoryId) => {
    navigate(`/product/subcategory/${subCategoryId}`)
  }

  return (
    <div
      className={`px-6 md:px-12 py-6 ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-base-200 text-gray-800'
        }`}
    >
      <h1
        className={`text-center font-bold text-2xl mb-6 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
          }`}
      >
        CATEGORIES
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          <div
            key={category._id}
            className={`relative group rounded-md shadow-sm hover:shadow-md transition duration-200 flex flex-col items-center justify-center p-4 border ${theme === 'dark'
                ? 'bg-gray-800 border-gray-700'
                : 'bg-white border-gray-200'
              }`}
            onMouseLeave={() => {
              setActiveTooltip(null)
            }}
          >
            <img
              src={category.image}
              alt={category.name}
              className="md:h-60 md:w-80 object-contain mb-4"
            />
            <div
              className={`text-sm font-bold uppercase text-center relative ${theme === 'dark' ? 'text-gray-200' : 'text-gray-900'
                }`}
              onMouseEnter={() => {
                setActiveTooltip(category._id);
                dispatch(getSubCategories(category._id)); // fetch subs for this category
              }}
            >
              {category.name}
              {activeTooltip === category._id && (
  <div
    className={`absolute top-[-110px] left-1/2 transform -translate-x-1/2 rounded shadow-lg z-20 px-4 py-2 w-56 border ${
      theme === 'dark'
        ? 'bg-gray-700 border-gray-600 text-gray-100'
        : 'bg-white border-gray-300 text-gray-800'
    }`}
  >
    {Array.isArray(subCategories) && subCategories.some(sub => sub.category === category._id) ? (
      subCategories
        .filter(sub => sub.category === category._id)
        .map((sub) => (
          <div
            key={sub._id}
            className={`flex items-center justify-between py-1 px-2 cursor-pointer ${
              theme === 'dark' ? 'hover:bg-gray-600' : 'hover:bg-gray-100'
            }`}
            onClick={() => handleSubCategoryClick(sub._id)}
          >
            <span>{sub.name}</span>
            <FaChevronRight className="text-xs" />
          </div>
        ))
    ) : (
      <p className="text-xs text-gray-500">No subcategories</p>
    )}
  </div>
)}


            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
