import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  registrations: [],
  error: null,
  loading: false,
};

export const postRegistrations = createAsyncThunk(
  "post/registrations",
  async (text, thunkAPI) => {
   
    try {
      const res = await fetch("http://10.1.2.0:5000/adduser", {
        method: "POST",
        body: JSON.stringify( {userName: text.text, phone:text.text1,  email:text.text2, password: text.text3} ),
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
      .addCase(postRegistrations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postRegistrations.fulfilled, (state, action) => {
        state.registrations.push(action.payload)
        state.loading = false;
      })
      .addCase(postRegistrations.rejected, (state, action) => {
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