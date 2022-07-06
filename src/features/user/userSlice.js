import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const userInfo = JSON.parse(localStorage.getItem("userInfo"))
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {},
    pending: false,
    error: false,
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(login.pending, (state) => {
  //       state.pending = true;
  //     })
  //     .addCase(login.fulfilled, (state, action) => {
  //       state.pending = false;
  //       state.userInfo = action.payload;
  //     })
  //     .addCase(login.rejected, (state) => {
  //       state.pending = false;
  //       state.error = true;
  //     });
  // },
});

// export const login = createAsyncThunk("user/login", async (payload) => {

// });
export default userSlice.reducer;
