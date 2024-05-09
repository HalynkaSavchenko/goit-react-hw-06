import { createSlice } from '@reduxjs/toolkit';

const filterInitialState ={
    filter: {
        name: '',
        number: '',
      }
};

const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        setFilter: {
            reducer(state, action) {
                state.filter = action.payload
            },
            prepare(filters) {
                return {
                    payload: {
                        name: filters.name,
                        number: filters.number,
                    }
                }
            }
        }
    }
});

export const {setFilter} = filterSlice.actions;

export default filterSlice.reducer;