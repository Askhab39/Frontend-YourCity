import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  registrations: [],
  error: null,
  loading: false,
};

export const postRegist1 = createAsyncThunk(
  "post/regist1",
  async (text, thunkAPI) => {
    try {
      const res = await fetch("http://10.1.2.0:5000/adduser", {
        method: "POST",
        body: JSON.stringify({
          email: text.text1,
          password: text.text2,
        }),
        headers: {
          "Content-type": "Application/json",
        },
      });
      const data = await res.json();
      if (data.error) {
        return thunkAPI.rejectWithValue(data.error);
      }
      //   console.log(data);

      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const postRegist2 = createAsyncThunk(
  "post/regist2",
  async (text, thunkAPI) => {
    try {
      const res = await fetch("http://10.1.2.0:5000/updateuser", {
        method: "POST",
        body: JSON.stringify({
          email: text.text1,
          password: text.text2,
          name: text.text3,
          surname: text.text4,
          address: text.text5,
          phone: text.text6,
        }),
        headers: {
          "Content-type": "Application/json",
        },
      });
      const data = await res.json();
      if (data.error) {
        return thunkAPI.rejectWithValue(data.error);
      }
      //   console.log(data);

      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);



export const getRegistrations = createAsyncThunk(
  "get/registrations",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://10.1.2.0:5000/adduser");
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const registrationsSlice = createSlice({
  name: "registrations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postRegist1.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postRegist1.fulfilled, (state, action) => {
        state.registrations.push(action.payload);
        state.loading = false;
      })
      .addCase(postRegist1.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(postRegist2.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postRegist2.fulfilled, (state, action) => {
        state.registrations.push(action.payload);
        state.loading = false;
      })
      .addCase(postRegist2.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      

      .addCase(getRegistrations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRegistrations.fulfilled, (state, action) => {
        state.registrations = action.payload;
        state.loading = false;
      })
      .addCase(getRegistrations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default registrationsSlice.reducer;
