import {Service, SortedAppointment} from "../../types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {fetchDatetime, fetchServices} from "./servicesThunks";

interface ServicesState {
  services: Service[];
  datetime: SortedAppointment[];
  selectedItems: Service[];
  fetchLoading: boolean;
}

const initialState: ServicesState = {
  services: [],
  datetime: [],
  selectedItems: [],
  fetchLoading: false
};

export const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    addService: (state, {payload: service}: PayloadAction<Service>) => {
      const existingIndex = state.services.find(item => {
        return item.id === service.id;
      });
      const includes = state.selectedItems.find((item) => item.id === service.id);
      if (existingIndex && !includes) {
        state.selectedItems.push(service);
      }
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchServices.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchServices.fulfilled, (state, {payload: services}) => {
      state.fetchLoading = false;
      state.services = services;
    });
    builder.addCase(fetchServices.rejected, (state) => {
      state.fetchLoading = false;
    });
    builder.addCase(fetchDatetime.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchDatetime.fulfilled, (state, {payload: datetime}) => {
      state.fetchLoading = false;
      state.datetime = datetime;
    });
    builder.addCase(fetchDatetime.rejected, (state) => {
      state.fetchLoading = false;
    });
  }
});

export const servicesReducer = servicesSlice.reducer;

export const {addService} = servicesSlice.actions;


export const selectServices = (state: RootState) => state.services.services;
export const selectFetching = (state: RootState) => state.services.fetchLoading;
export const selectDatetime = (state: RootState) => state.services.datetime;
export const selectedItems = (state: RootState) => state.services.selectedItems;