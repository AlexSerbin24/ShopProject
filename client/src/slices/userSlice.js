import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "../api/UserService";

const initialState = { user: null, wasAuthChecked: false, isLoading: false };

export const login = createAsyncThunk("user/login", async (loginData) => {

    try {
        const userData = await UserService.login(loginData);
        console.log(userData)
        localStorage.setItem("token", userData.accessToken);
        return userData;
    } catch (error) {
        throw new Error(error.response.data.message)
    }

});

export const register = createAsyncThunk("user/register", async (registerData) => {
    try {
        const userData = await UserService.register(registerData);
        localStorage.setItem("token", userData.accessToken);
        return userData
    } catch (error) {
        throw new Error(error.response.data.message)
    }
})

export const logout = createAsyncThunk("user/logout", async () => {
    await UserService.logout();
    localStorage.removeItem("token");
})

export const checkAuth = createAsyncThunk('user/checkAuth', async () => {

    try {
        const userData = await UserService.checkAuth()
        localStorage.setItem("token", userData.accessToken);
        return userData;
    } catch (error) {
        return null;
    }
})



const userSlice = createSlice({
    initialState,
    name: "user",
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, { payload }) => {
                return { ...state, isLoading: false, user: payload }
            })
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(register.fulfilled, (state, { payload }) => {
                return { ...state, isLoading: false, user: payload }
            })
            .addCase(register.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(register.rejected, (state) => {
                state.isLoading = false
            })
            .addCase(logout.fulfilled, (state) => {
                return { ...state, user: null, isLoading: false };
            })
            .addCase(logout.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(checkAuth.fulfilled, (state, { payload }) => {
                return { ...state, isLoading: false, wasAuthChecked: true, user: payload }
            });

    }
})


const { reducer } = userSlice;

export default reducer;