import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name : "search",
  initialState:{},
  reducers:{
    addToCache : (state,action)=>{// { "iphone" : ["iphone","iphone13","iphone15"] }

      //state = {...state, ...action.payload}//Dont work

      return { ...state, ...action.payload} //Works
      // state = Object.assign(state,action.payload) //Works
    }
  }
})

export const {addToCache} = searchSlice.actions
export default searchSlice.reducer
