import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../api-client";

const login = createAsyncThunk('auth/login',
  async data => {
    const response = await apiClient.post('/auth', data);
    return response.data
  });

const logout = createAsyncThunk('auth/logout',
    async () => {
      const response = await apiClient.post('/auth/logout');
      return response.data;
    }
)

const fetchSession = createAsyncThunk('auth/fetchSession',
  async () => {
    const response = await apiClient.get('/auth/me');
    return response.data
  });

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    hasLoaded: false,
    user: null
  },
  reducers: {},
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.hasLoaded = true;
      state.user = action.payload.user;
    },
    [login.rejected]: (state, action) => {
      state.hasLoaded = true;
      state.user = null;
    },
    [logout.fulfilled]: (state, action) => {
      state.user = null;
    },
    [fetchSession.fulfilled]: (state, action) => {
      state.hasLoaded = true;
      state.user = action.payload.user;
    }
  }
});

export default authSlice.reducer;
export { login, fetchSession, logout };
