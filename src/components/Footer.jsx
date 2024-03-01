import { useEffect } from "react";
import { getUserCartItems } from "../controllers/userController";
import { bagActions } from "../store/bagSlice";
import { useDispatch } from "react-redux";

const Footer=()=>{

  const dispatch=useDispatch();

  useEffect(()=>{
    setTimeout(async()=>{
    const data=await getUserCartItems();
    dispatch(bagActions.addProductsToBag(data));
    },500)
  },[])

  return(
    <>
    <footer>

      <div className="footer">

      <div>
        <h2>ONLINE SHOPPING</h2>
       <ul>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
        <li>Home & Living</li>
        <li>Beauty</li>
        <li>Gift Card</li>
        <li>Myntra Insider</li>
       </ul>
      </div>

      <div>
      <h2>ONLINE SHOPPING</h2>
      <ul>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
        <li>Home & Living</li>
        <li>Beauty</li>
        <li>Gift Card</li>
        <li>Myntra Insider</li>
       </ul>
      </div>

      <div>
      <h2>ONLINE SHOPPING</h2>
      <ul>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
        <li>Home & Living</li>
        <li>Beauty</li>
        <li>Gift Card</li>
        <li>Myntra Insider</li>
       </ul>
      </div>

      </div>

      <hr/>

      <p>© 2023 www.myntra.com. All rights reserved Venkatesh S M</p>

    </footer>
    </>
  )

}

export default Footer;