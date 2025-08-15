import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { filterBySubCategory } from '../store/features/productsSlice'
import { setSelectedSubCategory } from '../store/features/categorySlice'

const SubCategories = () => {
const {subCategoryId} = useParams()
const{productId} = useParams()
const dispatch = useDispatch()
const products =  useSelector ((state ) => state.products.items)
const navigate = useNavigate()

useEffect(() => {
    if (subCategoryId) {
        dispatch(filterBySubCategory(subCategoryId))
    }
}, [subCategoryId, dispatch])


const handleProductClick = (productId) => {
    navigate(`/product/${productId}`)
}


  return (
    <div>
        <div className="p-6">
      <h1 className="text-xl font-bold mb-4 uppercase">
         {subCategoryId}
      </h1>

      {products.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
              onClick={() => handleProductClick(product.id)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full md:h-70 h-40 object-cover mb-2 rounded"
              />
              <h3 className="font-semibold">{product.name}</h3>
            
            </div>
          ))}
        </div>
      ) : (
        <p>No products found for this subcategory.</p>
      )}
    </div>
    </div>
  )
}

export default SubCategories