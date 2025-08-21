import { configureStore } from "@reduxjs/toolkit";
import toggleMenuSlice from "./toggleMenu-slice";

const store = configureStore({
    reducers: {
        menu: toggleMenuSlice.reducer,
    }
})

export default store;