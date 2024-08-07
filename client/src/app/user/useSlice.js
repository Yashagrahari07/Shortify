import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
    error: null,
    loading: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        updateUserStart: (state) => {
            state.loading = true;
        },
        updateUserSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        updateUserFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        deleteUserStart: (state) => {
            state.loading = true;
        },
        deleteUserSuccess: (state) => {
            state.currentUser = null;
            state.loading = false;
            state.error = null;
        },
        deleteUserFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        signOutUserStart: (state) => {
            state.loading = true;
        },
        signOutUserSuccess: (state) => {
            state.currentUser = null;
            state.loading = false;
            state.error = null;
        },
        signOutUserFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
    },
    extraReducers: (builder) => {
        builder.addCase('persist/REHYDRATE', (state, action) => {
            if (action.payload && action.payload.user) {
                return {
                    ...state,
                    ...action.payload.user,
                    loading: false,
                };
            } else {
                return initialState;
            }
        });
    },
});

export const checkToken = () => (dispatch) => {
    const token = document.cookie.split('; ').find(row => row.startsWith('access_token='));
    if (!token) {
      dispatch(userSlice.actions.deleteUserSuccess()); // Assuming deleteUserSuccess sets currentUser to null
    }
  };

export const { 
    signInStart, 
    signInSuccess, 
    signInFailure, 
    updateUserStart, 
    updateUserSuccess, 
    updateUserFailure,
    deleteUserFailure,
    deleteUserSuccess,
    deleteUserStart,
    signOutUserStart,
    signOutUserSuccess,
    signOutUserFailure,
} = userSlice.actions;

export default userSlice.reducer;