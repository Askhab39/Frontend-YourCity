import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: [],
  error: null,
  loading: false,
};

export const postAuth = createAsyncThunk(
  "post/auth",
  async (text, thunkAPI) => {
   
    try {
      const res = await fetch("http://localhost:3001/auth", {
        method: "POST",
        body: JSON.stringify( { email:text.text1, phone:text.text2 } ),
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

export const getAuth = createAsyncThunk(
  "get/auth",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://127.0.0.1:5000/auth");
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postAuth.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postAuth.fulfilled, (state, action) => {
        state.auth.push(action.payload)
        state.loading = false;
      })
      .addCase(postAuth.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })


      .addCase(getAuth.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAuth.fulfilled, (state, action) => {
        state.auth = action.payload;
        state.loading = false;
      })
      .addCase(getAuth.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;