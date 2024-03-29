let randomNumber=Math.round(Math.random()*7)
const today=dayjs();
const days=today.add(randomNumber,"days")

export const kidsItems=[{
  id: '0025',
  image: 'images/25.webp',
  company: 'DearJoy',
  item_name: 'Kids Grey & Brown Elephant & Monkey Soft Toy',
  original_price:  1000,
  current_price: 400,
  discount_percentage: 60,
  return_period: 20,
  delivery_date: days.format("dddd, MMMM D"),
  rating: {
      stars: 4.3,
      count: 1100,
  },
  quantity:1
},
{
  id: '0026',
  image: 'images/26.avif',
  company: 'zest 4 toyz',
  item_name: 'Kids Assorted Musical Dancing Girl Doll',
  original_price:  1999,
  current_price: 599,
  discount_percentage: 70,
  return_period: 6,
  delivery_date: days.format("dddd, MMMM D"),
  rating: {
      stars: 4.4,
      count: 450,
  },
  quantity:1
},
{
  id: '0027',
  image: 'images/27.avif',
  company: 'H&M',
  item_name: 'Boys Superstretch Slim Fit Jeans',
  original_price:1999,
  current_price:799,
  discount_percentage:60,
  return_period:15,
  delivery_date:days.format("dddd, MMMM D"),
  rating:{
      stars: 4.4,
      count: 770,
  },
  quantity:1
},
{
  id: '0028',
  image: 'images/28.avif',
  company: 'BAESD',
  item_name: 'Boys Party 3 Piece Suit',
  original_price:  1999,
  current_price: 799,
  discount_percentage: 60,
  return_period: 10,
  delivery_date: days.format("dddd, MMMM D"),
  rating: {
      stars: 4.2,
      count: 534,
  },
  quantity:1
},
{
  id: '0029',
  image: 'images/29.avif',
  company: 'pspeaches',
  item_name: 'Girls Pink & Orange Lehenga & Blouse With Dupatta',
  original_price:  4568,
  current_price: 867,
  discount_percentage: 80,
  return_period: 15,
  delivery_date: days.format("dddd, MMMM D"),
  rating: {
      stars: 4.0,
      count: 934,
  },
  quantity:1
},
{
  id: '0030',
  image: 'images/30.avif',
  company: 'pspeaches',
  item_name: 'Girls White Kurti with Dhoti Pants',
  original_price:  2899,
  current_price: 695,
  discount_percentage: 60,
  return_period: 5,
  delivery_date: days.format("dddd, MMMM D"),
  rating: {
      stars: 4.2,
      count: 934,
  },
  quantity:1
},
{
  id: '0031',
  image: 'images/31.jpg',
  company: 'Kids On Board',
  item_name: 'Unisex Kids Graphic Printed Backpack',
  original_price:  2799,
  current_price: 979,
  discount_percentage: 30,
  return_period: 5,
  delivery_date: days.format("dddd, MMMM D"),
  rating: {
      stars: 4.1,
      count: 1034,
  },
  quantity:1
},
{
  id: '0032',
  image: 'images/32.avif',
  company: 'Disney',
  item_name: 'Kids Disney Princess Cabin Luggage Trolley Bag',
  original_price:  4499,
  current_price: 2999,
  discount_percentage: 55,
  return_period: 10,
  delivery_date: days.format("dddd, MMMM D"),
  rating: {
      stars: 4.4,
      count: 1234,
  },
  quantity:1
},
]