import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterModel, FiltersModel } from '../../models';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: null as FiltersModel | null,
  reducers: {
    setFilter: (state: FiltersModel | null, action: PayloadAction<{ data: FilterModel; content: string }>): FiltersModel | null => {
      return { ...state, [action.payload.content]: { ...(state ? state[action.payload.content] : {}), ...action.payload.data } };
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
