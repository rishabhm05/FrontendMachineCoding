import { createSlice } from "@reduxjs/toolkit";
const isalreadyloggedin = JSON.parse(localStorage.getItem("isloggedin"))
const initialState = {
    isPrivateUser:isalreadyloggedin||false,
    UserList: [ {userid :"abc@media.com",password:"abc123","username":"tom"}, {userid : "def@media.com",password:"def123","username":"dick"}],
    
    
    
}
const AuthenticationSlice = createSlice({
    name:'Authentication',
    initialState,
    reducers:{
        "SET_PRIVATEUSER":(state,action)=>{
            return {...state,isPrivateUser:action.payload}
        }
       
    }
})
export const {SET_PRIVATEUSER} = AuthenticationSlice.actions 
export default AuthenticationSlice.reducer;
