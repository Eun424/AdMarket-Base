import React, { useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { filterBySubCategory } from '../store/features/productsSlice';
import { themeContext } from '../context/ThemeContext'; // adjust the path

const SubCategories = () => {
  const { subCategoryId } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const navigate = useNavigate();
  const { theme } = useContext(themeContext); // get current theme

  useEffect(() => {
    if (subCategoryId) {
      dispatch(filterBySubCategory(subCategoryId));
    }
  }, [subCategoryId, dispatch]);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-900 text-gray-200' : 'bg-gray-100 text-gray-800'} min-h-screen p-6`}>
      <h1 className={`text-xl font-bold mb-4 uppercase ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
        {subCategoryId}
      </h1>

      {products.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className={`border rounded-lg p-4 shadow-sm transition cursor-pointer
                ${theme === 'dark' 
                  ? 'border-gray-700 bg-gray-800 hover:shadow-md hover:bg-gray-700' 
                  : 'border-gray-300 bg-white hover:shadow-md hover:bg-gray-50'}`}
              onClick={() => handleProductClick(product.id)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full md:h-70 h-40 object-cover mb-2 rounded"
              />
              <h3 className={`font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
                {product.name}
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
