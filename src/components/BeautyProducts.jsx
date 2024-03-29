import { useSelector } from "react-redux"
import Product from "./Product"

const BeautyProducts = () => {

const beautyProducts=useSelector((store)=>store.beautyProducts)

  return (
    <main className="products-container">
      {beautyProducts.map((item)=><Product key={item.image} item={item}/>)}
    </main>
  )
}

export default BeautyProducts;
