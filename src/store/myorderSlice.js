import { createSlice } from "@reduxjs/toolkit"

const myorderSlice=createSlice({

  name:"myorders",
  initialState:[],
  reducers:{
    addItemsToMyOrders:(state,action)=>{
      return action.payload
    }
  }

})

export const myordersAction=myorderSlice.actions;

export default myorderSlice;