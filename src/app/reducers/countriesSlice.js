import { createSlice } from "@reduxjs/toolkit";

export const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    whistlist: [],
  },
  reducers: {
    addCountryToWhistlist: (state, action) => {
      const country = action.payload;
      state.whistlist = [...state.whistlist, country];

      /*
      const exist = state.whistlist.some(
        (item) => item.name.common === country.name.common
      );
      

      if (exist) {
        alert("The country already exists in your whistlist");
      } else {
        state.whistlist = [...state.whistlist, country];
      }
      */
    },
    deleteCountryFromWhistlist: (state, action) => {
      const country = action.payload;
      state.whistlist = state.whistlist.filter(
        (item) => item.name.common !== country.name.common
      );
    },
  },
});

export const { addCountryToWhistlist, deleteCountryFromWhistlist } =
  countriesSlice.actions;

export default countriesSlice.reducer;
