import {createAsyncThunk} from "@reduxjs/toolkit";
import {DateObject, Datetime, Service} from "../../types";
import axiosApi from "../../axiosApi";

export const fetchServices = createAsyncThunk<Service[]>(
  'services/fetchServices',
  async () => {
    const response = await axiosApi.get<Service[]>('/services/?format=json');
    return response.data;
  }
);

export const fetchDatetime = createAsyncThunk<DateObject[]>(
  'services/fetchDatetime',
  async () => {
    const response = await axiosApi.get<Datetime[]>('business-hours/?format=json');
    const responseData = response.data.sort((a, b) => Date.parse(a.date_time) - Date.parse(b.date_time));

      const dates: Record<string, DateObject> = {};
      for (let item of responseData) {
        const date = item.date_time.slice(0, 10);
        const time = item.date_time.slice(11, 16);
        if (!dates[date]) {
          dates[date] = {date, hours: []};
        }
        dates[date].hours.push(time);
      }
    return Object.values(dates);
  }
);