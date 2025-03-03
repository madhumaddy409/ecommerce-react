import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
    email: string,
    firstName: string,
    profilePicture: string,
    role: string
}

interface userState {
    user: User;
}

const initialState: userState = {
    user: {
        email: "",
        firstName: "",
        profilePicture: "",
        role: ""
    }
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (
            state, 
            action: PayloadAction<
            { 
                email: string; 
                firstName: string; 
                profilePicture: string; 
                role: string
            }>) => {

            state.user = { ...action.payload };
        }
    }
})

export const { addUser } = userSlice.actions;
export default userSlice.reducer;