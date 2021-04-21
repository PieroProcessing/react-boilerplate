import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RequestData, TableModel } from '../../models';
import { ResponseModel } from '../../models/table';

const tableSlice = createSlice({
  name: 'table',
  initialState: null as TableModel | null,
  reducers: {
    getData: (state: TableModel | null, action: PayloadAction<string>): void => {},
    addData: (state: TableModel | null, action: PayloadAction<{ data: ResponseModel; content: string }>): TableModel | null => {
      return { ...state, [action.payload.content]: action.payload.data };
    },
  },
});

export const { getData, addData } = tableSlice.actions;
export default tableSlice.reducer;
