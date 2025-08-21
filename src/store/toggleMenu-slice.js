import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false
}

const toggleMenuSlice = createSlice({
    name: 'toggleMenu',
    initialState,
    reducers: {
        toggleMenu(state) {
            state.isOpen = !state.isOpen;
        }
    }
})

export const menuAction = toggleMenuSlice.actions;
export default toggleMenuSlice;