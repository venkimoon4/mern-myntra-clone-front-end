import { createSlice } from "@reduxjs/toolkit"

const shippingSlice=createSlice({
name:"shipping",
initialState:{
  firstName:null,
  lastName:null,
  address:null,
  country:null,
  zipcode:null,
  city:null,
  state:null
},
reducers:{
updateShipping:(state,action)=>{
 return action.payload;
}
}
})

export const shippingActions=shippingSlice.actions;

export default shippingSlice;