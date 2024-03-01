import { createSlice } from "@reduxjs/toolkit";


const bagSlice=createSlice({
  name:"bag",
  initialState:[],
  reducers:{
    addProductsToBag:(state,action)=>{
     return state,action.payload
    },
    removeProductsFromBag:(state,action)=>{return state.filter((item)=>item.id!==action.payload)},
    clearProductsFromBag:(state)=>{state.length=0}
  }
})

export default bagSlice;

export const bagActions=bagSlice.actions;