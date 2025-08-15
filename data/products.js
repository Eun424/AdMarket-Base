import fridge from '../src/assets/images/dress3.jpg'
import aloe from '../src/assets/images/aloe.jpeg'
import oil from '../src/assets/images/oil.jpeg'
import lips from '../src/assets/images/lips.jpeg'
import cream from '../src/assets/images/cerave-2.jpg'


export const productsData = [
  // Home Appliances
  { id: 1, name: "LG Double Door Fridge", category: "Home Appliances", subCategory: "fridges", image: fridge },
  { id: 2, name: "Samsung Microwave", category: "Home Appliances", subCategory: "microwaves", image: "" },
  { id: 3, name: "Panasonic Standing Fan", category: "Home Appliances", subCategory: "fans", image: "" },
  { id: 13, name: "Men’s Haircut", category: "Services", subCategory: "Men", image: "" },
  { id: 14, name: "Women’s Braiding", category: "Services", subCategory: "Women", image: "" },
  { id: 15, name: "Kids’ Swimming Lessons", category: "Services", subCategory: "Kids", image: "" },

  // Fashion
  { id: 4, name: "Men’s Formal Shirt", category: "Fashion", subCategory: "men", image: "" },
  { id: 5, name: "Women’s Summer Dress", category: "Fashion", subCategory: "women", image: "" },
  { id: 6, name: "Kids’ Sneakers", category: "Fashion", subCategory: "kids", image: "" },

  // Beauty and Personal Care
  { id: 7, name: "Aloe Vera Skin Cream", category: "Beauty and Personal Care", subCategory: "skincare", image: aloe },
  { id: 19, name: "Cerave Moisturing Cream", category: "Beauty and Personal Care", subCategory: "skincare", image: cream },
  { id: 8, name: "Argan Oil Hair Serum", category: "Beauty and Personal Care", subCategory: "hair products", image: oil },
  { id: 9, name: "Matte Lipstick", category: "Beauty and Personal Care", subCategory: "makeup", image: lips },

  // Food and Edibles
  { id: 10, name: "Potato Chips", category: "Food and Edibles", subCategory: "snacks", image: "" },
  { id: 11, name: "Jollof Rice", category: "Food and Edibles", subCategory: "groceries", image: "" },
  { id: 12, name: "Coca Cola Bottle", category: "Food and Edibles", subCategory: "drinks", image: "" },

  // Services
  { id: 19, name: "Men’s Haircut", category: "Services", subCategory: "HairCut", image: ""},
  { id: 20, name: "Women’s Braiding", category: "Services", subCategory: "Braiding", image: "" },
  { id: 21, name: "Kids’ Swimming Lessons", category: "Services", subCategory: "Phone repairs", image: "" },

  // Electronics
  { id: 16, name: "Men’s Smartwatch", category: "Electronics", subCategory: "Men", image: "" },
  { id: 17, name: "Women’s Fitness Tracker", category: "Electronics", subCategory: "Women", image: "" },
  { id: 18, name: "Kids’ Educational Tablet", category: "Electronics", subCategory: "Kids", image: "" }
];
