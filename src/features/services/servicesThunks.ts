import {createAsyncThunk} from "@reduxjs/toolkit";
import {IService} from "../../types";
import axiosApi from "../../axiosApi";

export const fetchServices = createAsyncThunk<IService[]>(
  'services/fetchAll',
  async () => {
    const response = await axiosApi.get<IService[]>('/services/?format=json');
    return response.data;
  }
);