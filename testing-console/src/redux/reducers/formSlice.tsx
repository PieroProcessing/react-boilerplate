import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormModel, InputModel } from '../../models';

const formSlice = createSlice({
  name: 'form',
  initialState: null as FormModel | null,
  reducers: {
    setInput: (state: FormModel | null, action: PayloadAction<{ name: string; value: InputModel }>): FormModel | null => {
      return { ...state, [action.payload.name]: { ...(state ? state[action.payload.name] : {}), ...action.payload.value } };
    },
  },
});

export const { setInput } = formSlice.actions;
export default formSlice.reducer;
