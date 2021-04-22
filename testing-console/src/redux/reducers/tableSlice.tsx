import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TableModel } from '../../models';
import { ResponseModel } from '../../models/table';
import { setFilter } from './filtersSlice';

const tableSlice = createSlice({
  name: 'table',
  initialState: null as TableModel | null,
  reducers: {
    getData: (state: TableModel | null, action: PayloadAction<string>): void => {},
    addData: (state: TableModel | null, action: PayloadAction<{ data: ResponseModel; content: string }>): TableModel | null => {
      return { ...state, [action.payload.content]: action.payload.data };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      setFilter,
      (state, action): TableModel => ({
        ...state,
        [action.payload.content]: {
          ...(state ? state[action.payload.content] : {}),
          data: state
            ? state[action.payload.content].data.filter((item) => Object.entries(action.payload.data).some(([key, value]) => item[key] === value))
            : [],
        },
      }),
    );
  },
});

export const { getData, addData } = tableSlice.actions;
export default tableSlice.reducer;
