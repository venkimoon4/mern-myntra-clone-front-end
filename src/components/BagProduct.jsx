import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { FcFullTrash } from "react-icons/fc";
import { deleteUserCartItem } from "../controllers/userController.js";

const BagProduct = ({ item }) => {

  const dispatch=useDispatch();

  const handleRemoveProductFromBag=async(itemId)=>{
    try{
    await deleteUserCartItem(itemId)
    dispatch(bagActions.removeProductsFromBag(itemId))
    }
    catch(error){
    console.log(error.message)
    }
  }

  const bag=useSelector((store)=>store.bag);

  return (
    <>
      <div className="product product-checkout-container">
        <div className="image-container">
          <img src={item.image} width="120px"></img>
        </div>

        <div className="product-details">
          <div className="name-container name-container-checkout">
            <h3>{item.company}</h3>
            <p>{item.item_name}</p>
            <h4>
              Rs {item.current_price} <del>Rs {item.original_price}</del>{" "}
              <span> ({item.discount_percentage}% OFF) </span>
            </h4>
          </div>

          <div className="product-return-details">

            <h5>Quantity: {item.quantity}</h5>

            <h5>
              {item.return_period} days <span>return available</span>
            </h5>

            <h6>
              Delivery By: <span>{item.delivery_date}</span>
            </h6>
            
          </div>

          <div className="delete-product" onClick={()=>handleRemoveProductFromBag(item.id)}><FcFullTrash/></div>
        </div>
      </div>
    </>
  );
};

export default BagProduct;
