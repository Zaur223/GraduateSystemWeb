import { configureStore } from "@reduxjs/toolkit";
import toggleMenuSlice from "./toggleMenu-slice";

const store = configureStore({
    reducer: {
        menu: toggleMenuSlice.reducer,
    }
})

export default store;