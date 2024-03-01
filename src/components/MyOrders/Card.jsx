import React from 'react'

const Card = ({item}) => {

  const randomNumber=Math.round(Math.random()*100)

  return (
    <div className="card shadow-0 border mb-4">
    <div className="card-body">
      <div className="row">
        <div className="col-md-2">
          <img src={item.image}
            className="img-fluid" alt="Phone"/>
        </div>
        <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
          <p className="text-muted mb-0">{item.company}</p>
        </div>
        <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
          <p className="text-muted mb-0 small">{item.item_name}</p>
        </div>
        <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
          <p className="text-muted mb-0 small">{item.delivery_date}</p>
        </div>
        <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
          <p className="text-muted mb-0 small">Qty : {item.quantity}</p>
        </div>
        <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
          <p className="text-muted mb-0 small">${item.current_price}</p>
        </div>
      </div>
      <hr className="mb-4" style={{backgroundColor: "#e0e0e0", opacity: "1"}}/>
      <div className="row d-flex align-items-center">
        <div className="col-md-2">
          <p className="text-muted mb-0 small">Track Order</p>
        </div>
        <div className="col-md-10">
          <div className="progress" style={{height: "6px", borderRadius: "16px"}}>
            <div className="progress-bar" role="progressbar"
              style={{width:`${randomNumber}%`, borderRadius: "16px", backgroundColor: "#a8729a"}} ariaValuenow="65"
              ariaValuemin="0" ariaValuemax="100"></div>
          </div>
          <div className="d-flex justify-content-around mb-1">
            <p className="text-muted mt-1 mb-0 small ms-xl-5">Out for delivary</p>
            <p className="text-muted mt-1 mb-0 small ms-xl-5">Delivered</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Card
