const randomNumber=Math.round(Math.random()*7)
const today=dayjs();
const days=today.add(randomNumber,"days")

export const beautyItems=[{
  id: '0037',
  image: 'images/37.avif',
  company: 'BE SOULFULL',
  item_name: 'One Stop Beauty Box - Daily Regime - 6 Products Gift Set',
  original_price: 3356,
  current_price: 1845,
  discount_percentage: 50,
  return_period: 6,
  delivery_date: days.format("dddd, MMMM D"),
  rating: {
      stars: 4.2,
      count: 1800,
  },
  quantity:1
},
{
  id: '0038',
  image: 'images/38.avif',
  company: 'Maybelline',
  item_name: 'New York Fit Me Matte + Poreless Liquid Foundation',
  original_price: 329,
  current_price: 213,
  discount_percentage: 30,
  return_period: 6,
  delivery_date: days.format("dddd, MMMM D"),
  rating: {
      stars: 4.0,
      count: 600,
  },
  quantity:1
},
{
  id: '0039',
  image: 'images/39.avif',
  company: 'Lakme',
  item_name: 'Eyeconic Liquid Eyeliner 4.5 ml - Black',
  original_price: 260,
  current_price: 221,
  discount_percentage: 15,
  return_period: 3,
  delivery_date: days.format("dddd, MMMM D"),
  rating: {
      stars: 4.5,
      count: 1600,
  },
  quantity:1
},
{
  id: '0040',
  image: 'images/40.avif',
  company: 'LOreal',
  item_name: 'Paris Glycolic Bright Glowing Night Cream for Dark Spots',
  original_price: 399,
  current_price: 299,
  discount_percentage: 25,
  return_period: 2,
  delivery_date: days.format("dddd, MMMM D"),
  rating: {
      stars: 4.5,
      count: 1450,
  },
  quantity:1
},
{
  id: '0041',
  image: 'images/41.avif',
  company: 'LOreal',
  item_name: 'Paris Infallible 24H Fresh Wear Waterproof Powder Foundation',
  original_price: 1099,
  current_price: 824,
  discount_percentage: 25,
  return_period: 2,
  delivery_date: days.format("dddd, MMMM D"),
  rating: {
      stars: 4.4,
      count: 1070,
  },
  quantity:1
},
{
  id: '0042',
  image: 'images/42.avif',
  company: 'Park Avenue',
  item_name: 'Signature Collection Voyage Amazon Woods Intense',
  original_price: 349,
  current_price: 174,
  discount_percentage: 50,
  return_period: 2,
  delivery_date: days.format("dddd, MMMM D"),
  rating: {
      stars: 4.5,
      count: 3070,
  },
  quantity:1
},
{
  id: '0043',
  image: 'images/43.jpg',
  company: 'Maybelline',
  item_name: 'New York Smudge Proof Colossal Kajal',
  original_price: 199,
  current_price: 153,
  discount_percentage: 23,
  return_period: 5,
  delivery_date: days.format("dddd, MMMM D"),
  rating: {
      stars: 4.0,
      count: 70,
  },
  quantity:1
},
{
  id: '0044',
  image: 'images/44.avif',
  company: 'SWISS BEAUTY',
  item_name: '3-In-1 Cream N Tint For Lips Cheeks & Eyelids',
  original_price: 219,
  current_price: 197,
  discount_percentage: 10,
  return_period: 5,
  delivery_date: days.format("dddd, MMMM D"),
  rating: {
      stars: 4.0,
      count: 505,
  },
  quantity:1
},
]