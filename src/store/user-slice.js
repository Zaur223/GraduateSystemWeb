import { createSlice } from "@reduxjs/toolkit";

// Hydrate from localStorage so refresh keeps user data
const loadStoredUser = () => {
    if (typeof localStorage === 'undefined') return null;
    try {
        const raw = localStorage.getItem('user');
        return raw ? JSON.parse(raw) : null;
    } catch (err) {
        return null;
    }
};

const storedUser = loadStoredUser();
const hasToken = typeof localStorage !== 'undefined' && Boolean(localStorage.getItem('token'));

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: storedUser,
        isAuthenticated: Boolean(storedUser && hasToken),
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            if (typeof localStorage !== 'undefined') {
                localStorage.setItem('user', JSON.stringify(action.payload));
            }
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            if (typeof localStorage !== 'undefined') {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
            }
        },
    },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice;