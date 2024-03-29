let randomNumber=Math.round(Math.random()*7)
const today=dayjs();
const days=today.add(randomNumber,"days")

export const menItems=[{
    id: '009',
    image: 'images/9.webp',
    company: 'Casio',
    item_name: 'VINTAGE Men Watch D011 A-158WA-1Q',
    original_price:  1695,
    current_price: 1000,
    discount_percentage: 42,
    return_period: 14,
    delivery_date: days.format("dddd, MMMM D"),
    rating: {
        stars: 4.2,
        count: 1200,
    },
    quantity:1
  },
  {
    id: '0010',
    image: 'images/10.webp',
    company: 'HRX by Hrithik Roshan',
    item_name: 'Men Grey & White Mesh Foam Shoes',
    original_price:  2999,
    current_price: 999,
    discount_percentage: 42,
    return_period: 14,
    delivery_date: days.format("dddd, MMMM D"),
    rating: {
        stars: 4.3,
        count: 1000,
    },
    quantity:1
  },
  {
    id: '0011',
    image: 'images/11.jpg',
    company: 'Mast & Harbour',
    item_name: 'Men Black Casual Linen Sustainable Shirt',
    original_price:  2899,
    current_price: 1359,
    discount_percentage: 30,
    return_period: 14,
    delivery_date: days.format("dddd, MMMM D"),
    rating: {
        stars: 4.1,
        count: 1070,
    },
    quantity:1
  },
  {
    id: '0012',
    image: 'images/12.jpg',
    company: 'OnePlus',
    item_name: 'Bullets Z2 Wireless Earphones With 30Hours Playback',
    original_price:  2899,
    current_price:1799,
    discount_percentage: 30,
    return_period: 14,
    delivery_date: days.format("dddd, MMMM D"),
    rating: {
        stars: 4.4,
        count: 1030,
    },
    quantity:1
  },
  {
    id: '0013',
    image: 'images/13.avif',
    company: 'BoAt',
    item_name: 'Airdopes Black 163 M with Ear Bluetooth Headset',
    original_price:  2490,
    current_price:1090,
    discount_percentage: 35,
    return_period: 6,
    delivery_date: days.format("dddd, MMMM D"),
    rating: {
        stars: 4.5,
        count: 960,
    },
    quantity:1
  },

  {
    id: '0014',
    image: 'images/14.jpg',
    company: 'Philips',
    item_name: 'Cordless Beard Trimmer with 45mins Runtime - White',
    original_price:  1495,
    current_price:1061,
    discount_percentage: 20,
    return_period: 6,
    delivery_date: days.format("dddd, MMMM D"),
    rating: {
        stars: 4.1,
        count: 560,
    },
    quantity:1
  },
  {
    id: '0015',
    image: 'images/15.webp',
    company: 'Safari',
    item_name: 'Glimpse Poly Carbonate Medium Hard Trolley Bag - 69 cm',
    original_price:  10799,
    current_price:2199,
    discount_percentage: 20,
    return_period: 10,
    delivery_date: days.format("dddd, MMMM D"),
    rating: {
        stars: 4.4,
        count: 860,
    },
    quantity:1
  },
  {
    id: '0016',
    image: 'images/16.avif',
    company: 'CMF by Nothing',
    item_name: 'Watch Pro',
    original_price: 5999,
    current_price:3499,
    discount_percentage: 40,
    return_period: 15,
    delivery_date: days.format("dddd, MMMM D"),
    rating: {
        stars: 4.5,
        count: 960,
    },
    quantity:1
  },
]