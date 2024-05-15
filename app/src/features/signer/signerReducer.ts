import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface ProviderState {
    address: string;
}

export const initialState: ProviderState = {
    address: '0x0',
};

export const signerReducer = createSlice({
    name: 'provider',
    initialState,
    reducers: {
        setAddress: (state, action: PayloadAction<string>) => {
            state.address = action.payload;
        },
    },
});

export const {setAddress} = signerReducer.actions;

export default signerReducer.reducer;
