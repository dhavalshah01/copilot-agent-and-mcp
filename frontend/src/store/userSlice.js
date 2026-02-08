import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: localStorage.getItem('token') || null,
  username: localStorage.getItem('username') || null,
  // generated-by-copilot: Add userType to state, retrieve from localStorage
  userType: localStorage.getItem('userType') || null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.token = action.payload.token;
      state.username = action.payload.username;
      // generated-by-copilot: Store userType in state and localStorage
      state.userType = action.payload.userType || 'member';
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('username', action.payload.username);
      localStorage.setItem('userType', action.payload.userType || 'member');
    },
    logout(state) {
      state.token = null;
      state.username = null;
      // generated-by-copilot: Clear userType from state and localStorage
      state.userType = null;
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      localStorage.removeItem('userType');
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
