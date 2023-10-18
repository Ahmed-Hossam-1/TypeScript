import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../../types/app";
import { RootState } from "../../store/Store";

type initialStateType = {
  loading: boolean;
  data: User[];
  error: string;
};

const initialState: initialStateType = {
  loading: false,
  data: [],
  error: "",
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const res = await axios.get("https://fakestoreapi.com/users");
  return res.data;
});

const userSlice = createSlice({
  initialState,
  name: "users",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message || "Something went Wrong";
    });
  },
});

export default userSlice.reducer;

export const selectUser = (state: RootState) => state.users;
