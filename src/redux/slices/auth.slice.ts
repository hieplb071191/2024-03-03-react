import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialAuthState= {
    token: '',
    isLogin: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {

    },
    extraReducers: (builder) => {

    }
})

export default authSlice.reducer