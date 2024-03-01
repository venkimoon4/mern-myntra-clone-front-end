import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getMyOrdersItems } from '../../controllers/userController';
import { myordersAction } from '../../store/myorderSlice';
import Card from './Card';
const Orders = () => {

  const email=useSelector((store)=>store.user.email);

  const dispatch=useDispatch();

  const myorders=useSelector((store)=>store.myorders);


  useEffect(()=>{
    setTimeout(async()=>{
      const data=await getMyOrdersItems();
      dispatch(myordersAction.addItemsToMyOrders(data))
    },500)
  },[])


  return (
  <div>
  <section className="h-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-10 col-xl-8">
        <div className="card" style={{borderRadius: "10px"}}>
          <div className="card-header px-4 py-5">
            <h5 className="text-muted mb-0">Thanks for your Order, <span style={{color: "#a8729a"}}>{email}</span>!</h5>
          </div>

          <div className="card-body p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <p className="lead fw-normal mb-0" style={{color: "#a8729a"}}>Your Orders</p>
              <p className="small text-muted mb-0">Total Orders: {myorders.length} </p>
            </div>
                        
            {myorders.map((item)=>{
              return <Card item={item}/>
            })}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Orders
