import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState ={
    Products:[],
    loading:true
}
const fetchproducts = async ()=>{
    try{
        let url =`https://dummyjson.com/products`
        let res = await fetch(url);
        res= await res.json();
        return res.products;
    }
    catch(err){
        console.log(err)
    }
}
export const getproducts = createAsyncThunk('fetchProducts',fetchproducts)
const ProductSlice = createSlice({
    initialState,
    name:'ProductSlice',
    extraReducers(builder){
        builder.addCase(getproducts.pending,(state,action)=>{
              return {...state,loading:true}
        })
        builder.addCase(getproducts.fulfilled,(state,action)=>{
            return {...state,Products:[...action.payload],loading:false}
        })
        builder.addCase(getproducts.rejected,(state,action)=>{
            return {...state,loading:true}
        })
    }
})
export default ProductSlice.reducer;