import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favs: [],
  quantity: 0,
};

const addtofav = createSlice({
  name: 'fav',
  initialState,
  reducers: {
    AddFavourite: (state, action) => {
      const find = state.favs.findIndex(item => item.idMeal === action.payload.idMeal);
      if (find >= 0) {
        state.favs[find].quantity += 1;
      } else {
        const tempvar = { ...action.payload, quantity: 1 };
        state.favs.push(tempvar);
      }
    },
    RemoveFavourite: (state, action) => {
      const find = state.favs.findIndex(item => item.idMeal === action.payload.idMeal);
      if (find >= 0) {
        if (state.favs[find].quantity > 1) {
          state.favs[find].quantity -= 1;
        } else {
          state.favs.splice(find, 1);
        }
      }
    },
  },
});

export const { AddFavourite, RemoveFavourite } = addtofav.actions;

export default addtofav.reducer;
