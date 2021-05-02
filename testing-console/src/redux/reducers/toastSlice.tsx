import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ToastModel } from '../../models';

const initState = {
  content: '',
  visible: false,
  error: false,
};
const toastSlice = createSlice({
  name: 'toast',
  initialState: initState,
  reducers: {
    setToast: (state: ToastModel, action: PayloadAction<ToastModel>): ToastModel => action.payload,
  },
});

export const { setToast } = toastSlice.actions;
export default toastSlice.reducer;
