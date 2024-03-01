const createUser=async(name,email,password,mobileno)=>{

  const res=await fetch('https://mern-myntra-clone-back-end.onrender.com/user/signup',{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({name,email,password,mobileno})
  })

  const data=await res.json();

  if(!res.ok){
    throw Error(data.error)
  }


  localStorage.setItem('email',data.email)
  localStorage.setItem('token',data.token)

  return data;
  
}


const loginUser=async(email,password)=>{

  const res=await fetch('https://mern-myntra-clone-back-end.onrender.com/user/login',{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({email,password})
  })

  const data=await res.json();

  if(!res.ok){
    throw Error(data.error)
  }


  localStorage.setItem('email',data.email)
  localStorage.setItem('token',data.token)

  return data;

}


//==================Create User Cart Items================//

const createUserCartItems=async(item)=>{

  const res=await fetch('https://mern-myntra-clone-back-end.onrender.com/user/cart',{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "authorization":`Bearer ${localStorage.getItem('token')}`
      },
      body:JSON.stringify(item)
    })

    const data=await res.json();

    if(!res.ok){
      throw Error(data.error)
    }

    console.log(data)
  
    return data;

}


const getUserCartItems=async()=>{


  const res=await fetch('https://mern-myntra-clone-back-end.onrender.com/user/cart',{
    method:"GET",
    headers:{
      authorization:`Bearer ${localStorage.getItem('token')}`
    }
  })

  const data=await res.json();

  if(!res.ok){
    throw Error(data.error)
  }

  console.log(data)

  return data;
  
}

const deleteUserCartItem=async(id)=>{

  const res=await fetch(`https://mern-myntra-clone-back-end.onrender.com/user/cart/${id}`,{
    method:"DELETE",
    headers:{
      authorization:`Bearer ${localStorage.getItem('token')}`
    }
  })

  const data=await res.json();

  if(!res.ok){
    throw Error(data.error)
  }

  console.log(data)

  return data;

}


//=========================Shipping Address======================//

const createUserShipping=async(firstName,lastName,address,country,zipcode,city,state)=>{

  if(!firstName || !lastName || !address || !country || !zipcode || !city || !state){
    throw Error("All Fields Are Required")
  }

  const res=await fetch('https://mern-myntra-clone-back-end.onrender.com/user/cart/shipping',{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "authorization":`Bearer ${localStorage.getItem('token')}`
    },
    body:JSON.stringify({firstName,lastName,address,country,zipcode,city,state})
  })

  const data=await res.json();


  if(!res.ok){
    throw Error(data.error)
  }

  return data

}


//=======================CheckOut==============================//

const userCheckout=async(price,nameOnCard,cardNumber)=>{

  if(!price || !nameOnCard || !cardNumber){
    throw Error("All Fields Are Required")
  }

  const res=await fetch('https://mern-myntra-clone-back-end.onrender.com/user/cart/checkout',{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "authorization":`Bearer ${localStorage.getItem('token')}`
    },
    body:JSON.stringify({price,nameOnCard,cardNumber})
  })

  const data=await res.json();

  if(!res.ok){
    throw Error(data.error)
  }

  return data

}

//=============================Post My Order====================================//

const createMyOrderItems=async(items)=>{

  console.log('i got the items',items)

  const res=await fetch('https://mern-myntra-clone-back-end.onrender.com/user/cart/payment',{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "authorization":`Bearer ${localStorage.getItem('token')}`
    },
    body:JSON.stringify(items)
  })

  const data=await res.json();


  if(!res.ok){
    throw Error(data.error)
  }

  return data

}


const getMyOrdersItems=async()=>{

  const res=await fetch('https://mern-myntra-clone-back-end.onrender.com/user/cart/payment',{
    method:"GET",
    headers:{
      "authorization":`Bearer ${localStorage.getItem('token')}`
    }
  })

  const data=await res.json();

  if(!res.ok){
    throw Error(data.error)
  }


  return data;

}


const clearAllUserCartItems=async()=>{

  const res=await fetch('https://mern-myntra-clone-back-end.onrender.com/user/cart',{
    method:"Delete",
    headers:{
      "authorization":`Bearer ${localStorage.getItem('token')}`
    }
  })

  const data=await res.json();

  console.log(data);

  if(!res.ok){
    throw Error(data.error)
  }

  return data

}

export {createUser,loginUser,createUserCartItems,getUserCartItems,deleteUserCartItem,createUserShipping,userCheckout,createMyOrderItems,getMyOrdersItems,clearAllUserCartItems}