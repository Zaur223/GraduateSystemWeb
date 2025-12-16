import { configureStore } from "@reduxjs/toolkit";
import toggleMenuSlice from "./toggleMenu-slice.js";
import userSlice from "./user-slice.js";

const store = configureStore({
    reducer: {
        menu: toggleMenuSlice.reducer,
        user: userSlice.reducer,
    }
})

export default store;