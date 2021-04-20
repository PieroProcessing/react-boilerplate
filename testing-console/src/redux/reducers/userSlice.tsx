import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RequestResponse } from '../../models';

const userSlice = createSlice({
  name: 'user',
  initialState: null as RequestResponse | null,
  reducers: {
    getUser: (): void => {},
    addListUsers: (state: RequestResponse | null, action: PayloadAction<RequestResponse | null>): RequestResponse | null => {
      return action.payload;
    },
  },
});

export const { getUser, addListUsers } = userSlice.actions;
export default userSlice.reducer;
