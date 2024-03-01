let randomNumber=Math.round(Math.random()*7)
const today=dayjs();
const days=today.add(randomNumber,"days")

export const womanItems=[{
    id: '0017',
    image: 'images/17.avif',
    company: 'RARE',
    item_name: 'Beige Floral Print Petal Sleeves Shirt Style Top',
    original_price:  1599,
    current_price: 623,
    discount_percentage: 42,
    return_period: 6,
    delivery_date: days.format("dddd, MMMM D"),
    rating: {
        stars: 3.9,
        count: 400,
    },
    quantity:1
},
{
  id: '0018',
  image: 'images/18.avif',
  company: 'Antheaa',
  item_name: 'Magenta Tiered Maxi Dress',
  original_price:  2799,
  current_price: 1315,
  discount_percentage: 42,
  return_period: 6,
  delivery_date: days.format("dddd, MMMM D"),
  rating: {
      stars: 4.0,
      count: 450,
  },
  quantity:1
},
{
  id: '0019',
  image: 'images/19.avif',
  company: 'Cottinfab',
  item_name: 'Women Grey & Black Checked Cotton Blazer',
  original_price:  2499,
  current_price: 999,
  discount_percentage: 60,
  return_period: 6,
  delivery_date: days.format("dddd, MMMM D"),
  rating: {
      stars: 4.2,
      count: 780,
  },
  quantity:1
},
{
  id: '0020',
  image: 'images/20.avif',
  company: 'M.A.C',
  item_name: 'M.A.C. Mini Matte Lipstick 1.8g - Ruby Woo',
  original_price:  2499,
  current_price: 1450,
  discount_percentage: 60,
  return_period: 0,
  delivery_date: days.format("dddd, MMMM D"),
  rating: {
      stars: 4.2,
      count: 779,
  },
  quantity:1
},
{
  id: '0021',
  image: 'images/21.avif',
  company: 'Anouk',
  item_name: 'Women Dusty Pink Solid Heels',
  original_price:  2699,
  current_price: 809,
  discount_percentage: 70,
  return_period: 15,
  delivery_date: days.format("dddd, MMMM D"),
  rating: {
      stars: 4.0,
      count: 999,
  },
  quantity:1
},
{
  id: '0022',
  image: 'images/22.webp',
  company: 'DressBerry Heels',
  item_name: 'Women Pink Heeled Sandals',
  original_price:  4699,
  current_price: 2409,
  discount_percentage: 60,
  return_period: 15,
  delivery_date: days.format("dddd, MMMM D"),
  rating: {
      stars: 4.4,
      count: 1999,
  },
  quantity:1
},
{
  id: '0023',
  image: 'images/23.avif',
  company: 'DressBerry',
  item_name: 'Women Black Dial & Rose Gold-Plated Analogue Watch',
  original_price: 2996,
  current_price: 808,
  discount_percentage: 70,
  return_period: 15,
  delivery_date: days.format("dddd, MMMM D"),
  rating: {
      stars: 4.5,
      count: 1599,
  },
  quantity:1
},
{
  id: '0024',
  image: 'images/24.avif',
  company: 'Lino Perros',
  item_name: 'Off-White Quilted Handheld Bag',
  original_price: 4495,
  current_price: 1798,
  discount_percentage: 50,
  return_period: 10,
  delivery_date: days.format("dddd, MMMM D"),
  rating: {
      stars: 4.5,
      count: 1099,
  },
  quantity:1
},
]