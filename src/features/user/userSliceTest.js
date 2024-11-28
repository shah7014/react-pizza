import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    name: ""
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: function (state, action) {
            state.name = action.payload
        }
    }
})

export const {addUser} = userSlice.actions;

export const selectUserName = (state) => state.user.name;
export const selectIsAuthenticated = (state) => state.user.name !== "";

export default userSlice.reducer;

