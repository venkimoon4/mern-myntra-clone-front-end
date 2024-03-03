import { useDispatch, useSelector } from "react-redux";
import BagProduct from "./BagProduct";
import { useEffect } from "react";
import { bagActions } from "../store/bagSlice";
import { getUserCartItems } from "../controllers/userController";

const BagProducts=()=>{

  const bag=useSelector((store)=>store.bag);

  const dispatch=useDispatch();

  useEffect(()=>{
    setTimeout(async()=>{
      const data=await getUserCartItems();
      dispatch(bagActions.addProductsToBag(data));
      },500)
  },[])

  return(
    <>
    {bag.length===0 && <div className="empty" style={{display:"flex",flexDirection:"column",alignItems:"center", height:"500px", justifyContent:"space-evenly"}}><h1 style={{fontSize:"1.5rem"}}>Your Bag Is Empty 🛒</h1>
    <img src="./images/cart-empty.gif" width="300px"/>
     <h2 style={{color:"green",fontSize:"1.5rem"}}>Please Add Your Products In Bag 🛍️</h2></div>
     }

     {bag.map((item)=><BagProduct key={item.current_price} item={item}/>)}
    </>
  )
}

export default BagProducts;