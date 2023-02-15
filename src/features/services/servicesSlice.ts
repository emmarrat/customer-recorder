import {IService} from "../../types";
import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {fetchServices} from "./servicesThunks";

interface ServicesState {
  items: IService[];
  fetchLoading: boolean;
}

const initialState: ServicesState = {
  items: [],
  fetchLoading: false
};

export const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchServices.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchServices.fulfilled, (state, {payload: services}) => {
      state.fetchLoading = false;
      state.items = services;
    });
    builder.addCase(fetchServices.rejected, (state) => {
      state.fetchLoading = false;
    });
  }
});

export const servicesReducer = servicesSlice.reducer;

export const selectServices = (state: RootState) => state.services.items;
export const selectFetching = (state: RootState) => state.services.fetchLoading;
