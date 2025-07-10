import React from 'react'
import electronics from '../assets/images/electrical1.jpg'
import fashion from '../assets/images/dress3.jpg'
import beauty from '../assets/images/beauty.jpg'
import food from '../assets/images/food.jpg'
import services from '../assets/images/braid.jpg'
import phones from '../assets/images/phones.jpg'

const categories = [
  { id: 1, name: 'Home Appliances', image: electronics },
  { id: 2, name: 'Fashion', image: fashion },
  { id: 3, name: 'Beauty and Personal Care', image: beauty },
  { id: 4, name: 'Food and Edibles', image: food },
  { id: 5, name: 'Services', image: services },
  { id: 6, name: 'Electronics', image: phones }
]

const Categories = () => {
  return (
    <div className="px-6 md:px-12 py-8 bg-base-200">
      <h1 className="text-center font-bold text-2xl mb-10 text-gray-800 ">CATEGORIES</h1>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-md transition duration-200 flex flex-col items-center justify-center p-4"
          >
            <img
              src={category.image}
              alt={category.name}
              className="md:h-60 md:w-80  object-contain mb-4"
            />
            <p className="text-sm font-bold uppercase text-gray-900 text-center">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
