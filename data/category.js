import electronics from '../src/assets/images/electrical1.jpg'
import fashion from '../src/assets/images/dress3.jpg'
import beauty from '../src/assets/images/beauty.jpg'
import food from '../src/assets/images/food.jpg'
import services from '../src/assets/images/braid.jpg'
import phones from '../src/assets/images/phones.jpg'

export const categoriesData = [
  {
    id: 1,
    name: 'Home Appliances',
    image: electronics,
    subcategories: [
       { id: "fridges", name:"Fridges"}, 
        { id: "microwaves", name:"Microwaves"}, 
        { id: "fans", name:"Fans"},
    ]
  },
  {
    id: 2,
    name: 'Fashion',
    image: fashion,
    subcategories: [
        { id: "men", name:"Men"}, 
        { id: "women", name:"Women"}, 
        { id: "kids", name:"Kids"},
    ]
  },
  {
    id: 3,
    name: 'Beauty and Personal Care',
    image: beauty,
    subcategories: [
        { id: "skincare", name:"Skin care"}, 
        { id: "hair products", name:"Hair Products"}, 
        { id: "makeup", name:"Make-up"}, 
    ]
  },
  {
    id: 4,
    name: 'Food and Edibles',
    image: food,
    subcategories: [
        { id: "snacks", name:"Snacks"}, 
        { id: "groceries", name:"Groceries"}, 
        { id: "drinks", name:"Drinks"},]
  },
  {
    id: 5,
    name: 'Services',
    image: services,
    subcategories: [{ id: "haircut", name:"Haircut"}, 
        { id: "braiding", name:"Braiding"}, 
        { id: "phone repairs", name:"Phone Repairs"},]
  },
  {
    id: 6,
    name: 'Electronics',
    image: phones,
    subcategories: [{ id: "men", name:"Men"}, 
        { id: "women", name:"Women"}, 
        { id: "kids", name:"Kids"},]
  }
]