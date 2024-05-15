import {combineReducers} from '@reduxjs/toolkit';
import signerReducer from '@/features/signer/signerReducer';

export default combineReducers({
    signer: signerReducer,
});
