import React, { useState } from 'react'
import electronics from '../assets/images/electrical1.jpg'
import fashion from '../assets/images/dress3.jpg'
import beauty from '../assets/images/beauty.jpg'
import food from '../assets/images/food.jpg'
import services from '../assets/images/braid.jpg'
import phones from '../assets/images/phones.jpg'
import { FaChevronRight } from 'react-icons/fa'

const categories = [
  {
    id: 1,
    name: 'Home Appliances',
    image: electronics,
    subcategories: ['Fridges', 'Microwaves', 'Fans']
  },
  {
    id: 2,
    name: 'Fashion',
    image: fashion,
    subcategories: ['Men', 'Women', 'Kids']
  },
  {
    id: 3,
    name: 'Beauty and Personal Care',
    image: beauty,
    subcategories: ['Skin Care', 'Hair Products', 'Makeup']
  },
  {
    id: 4,
    name: 'Food and Edibles',
    image: food,
    subcategories: ['Snacks', 'Groceries', 'Drinks']
  },
  {
    id: 5,
    name: 'Services',
    image: services,
    subcategories: ['Hair Styling', 'Laundry', 'Repairs']
  },
  {
    id: 6,
    name: 'Electronics',
    image: phones,
    subcategories: ['Phones', 'Laptops', 'Accessories']
  }
]

const Categories = () => {
  const [activeTooltip, setActiveTooltip] = useState(null)
  const [activeSubTooltip, setActiveSubTooltip] = useState(null)

  return (
    <div className="px-6 md:px-12 py-6 bg-base-200">
      <h1 className="text-center font-bold text-2xl mb-6 text-gray-800">CATEGORIES</h1>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative group bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-md transition duration-200 flex flex-col items-center justify-center p-4"
            onMouseLeave={() => {
              setActiveTooltip(null)
              setActiveSubTooltip(null)
            }}
          >
            <img
              src={category.image}
              alt={category.name}
              className="md:h-60 md:w-80 object-contain mb-4"
            />
            <p
              className="text-sm font-bold uppercase text-gray-900 text-center relative"
              onMouseEnter={() => setActiveTooltip(category.id)}
            >
              {category.name}
              {activeTooltip === category.id && (
                <div className="absolute top-[-110px] left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 rounded shadow-lg z-20 px-4 py-2 w-56">
                  {category.subcategories.map((sub, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between group relative py-1 px-2 hover:bg-gray-100 cursor-pointer"
                      onMouseEnter={() => setActiveSubTooltip(idx)}
                    >
                      <span>{sub}</span>
                       <FaChevronRight className="text-gray-500 text-xs" />

                      {activeSubTooltip === idx && (
                        <div className="absolute top-[-60px] right-[-200px] bg-white border border-gray-300 rounded shadow-md p-2 w-48 z-30">
                          <p className="text-sm text-gray-700">More details for "{sub}"</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
