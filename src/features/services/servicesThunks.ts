import {createAsyncThunk} from "@reduxjs/toolkit";
import {IDatetime, IService} from "../../types";
import axiosApi from "../../axiosApi";

export const fetchServices = createAsyncThunk<IService[]>(
  'services/fetchServices',
  async () => {
    const response = await axiosApi.get<IService[]>('/services/?format=json');
    return response.data;
  }
);

export const fetchDatetime = createAsyncThunk<IDatetime[]>(
  'services/fetchDatetime',
  async () => {
    const response = await axiosApi.get<IDatetime[]>('business-hours/?format=json');
    const responseData = response.data;
    return responseData.sort((a, b) => Date.parse(a.date_time) - Date.parse(b.date_time));
  }
);