import React, { useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { filterBySubCategory } from '../store/features/productsSlice';
import { themeContext } from '../context/ThemeContext'; 
import { getProductsBySubcategory } from '../store/features/categorySlice';
import Loader from '../helpers/Loader';

const SubCategories = () => {
  const { subCategoryId } = useParams();
  const dispatch = useDispatch();
  const {productBySubcategory, loadingSubCategories, error} = useSelector((state) => state.category);
  const navigate = useNavigate();
  const { theme } = useContext(themeContext); // get current theme

  useEffect(() => {
    dispatch(getProductsBySubcategory(subCategoryId))
  }, [subCategoryId, dispatch]);

  const handleProductClick = (productId) => {
    navigate(`/product/productById/${productId}`);
  };

  if(loadingSubCategories) return <Loader message='Fetching sub categories.....'/>
  if(error) return <div>{error}</div>

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-900 text-gray-200' : 'bg-gray-100 text-gray-800'} min-h-screen p-6`}>
      <h1 className={`text-xl font-bold mb-4 uppercase ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
        
      </h1>

      {productBySubcategory.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {productBySubcategory.map((product) => (
            <div
              key={product._id}
              className={`border rounded-lg p-4 shadow-sm transition cursor-pointer
                ${theme === 'dark' 
                  ? 'border-gray-700 bg-gray-800 hover:shadow-md hover:bg-gray-700' 
                  : 'border-gray-300 bg-white hover:shadow-md hover:bg-gray-50'}`}
              onClick={() => handleProductClick(product._id)}
            >
              <img
                src={product.productImage[0]}
                alt={product.productName}
                className="w-full md:h-70 h-40 object-cover mb-2 rounded"
              />
              <p className={`font-normal ${theme === 'dark' ? 'text-gray-200' : 'text-gray-500'}`}>
                {product.productName}
              </p>
              <h3 className={`font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
                GH₵ {product.price}
              </h3>
            </div>
          ))}
        </div>
      ) : (
        <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          No products found for this subcategory.
        </p>
      )}
    </div>
  );
};

export default SubCategories;
