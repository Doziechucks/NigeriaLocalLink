import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';  
import authService from '../../services/authService';
import  decodeToken  from '../../utils/jwtHelper';
export const register = createAsyncThunk('auth/register', async (userData, thunkAPI) => {
  try {
    const response = await authService.register(userData); 
    const user = decodeToken(response.token);
    return { token: response.token, user };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message || 'Register failed');
  }
});

export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const response = await authService.login(credentials); 
    const user = decodeToken(response.token);
    return { token: response.token, user };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message || 'Login failed');
  }
});

    
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    user: null, // { sub, firstName, role, email }
    isLoading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export default authSlice.reducer;