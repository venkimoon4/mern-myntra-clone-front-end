import {  useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
const BagSummary=()=>{

  const navigate=useNavigate();

  const bag=useSelector((store)=>store.bag);

  let totalMRP=0;
  let discountedMRP=0;
  let convenienceFee=bag.length===0 ? 0 : 99;

    bag.forEach((product)=>{
    totalMRP+=product.original_price*product.quantity;
    discountedMRP+=product.current_price*product.quantity;
  })

  const total=discountedMRP+convenienceFee;

  const handleOrderBtn=()=>{
    if(bag.length===0){
      alert("Please Add Items In Bag To Order")
    }
    else{
    navigate('/shipping')
    }
  }
  



  return(
    <>
    <div className="bag-summary">
     <h2>PRICE DETAILS: <span>({bag.length} items)</span></h2>
     <h4>Total MRP: <span>₹{totalMRP}</span></h4>
     <h4>Discounted on MRP: <span>₹{discountedMRP}</span></h4>
     <h4>Convenienec Fee: <span>₹{convenienceFee}</span></h4>
     <hr/>
     <h3>Total Amount: <span>₹{total}</span></h3>
     <button role="button" className="button-name" onClick={handleOrderBtn}>PLACE ORDER</button>
    </div>
    </>
  )

}

export default BagSummary;