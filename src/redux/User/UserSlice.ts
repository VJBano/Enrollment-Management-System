import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../constants/User";

const initialState:User = {
    id:"",
    firstname:"",
    lastname:"",
    age:0,
    contactno:""
}

const userSlice = createSlice({
    name:"User",
    initialState,
    reducers:{
        setUser: (_, action:PayloadAction<User>) => {
            return action.payload;
        },
        
        clearUser: () => {
            return initialState;
          }

    }
})
export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;