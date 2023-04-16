import {createAsyncThunk} from "@reduxjs/toolkit";
import {
  DatetimeApi,
  PostCancel,
  PostData,
  PostResponse,
  Service,
  SortedAppointment,
  ValidationError
} from "../../types";
import axiosApi from "../../axiosApi";
import {isAxiosError} from "axios";

export const fetchServices = createAsyncThunk<Service[]>(
  'services/fetchServices',
  async () => {
    const response = await axiosApi.get<Service[]>('/services/?format=json');
    return response.data;
  }
);

export const fetchDatetime = createAsyncThunk<SortedAppointment[]>(
  'services/fetchDatetime',
  async () => {
    const response = await axiosApi.get<DatetimeApi[]>('/business-hours/?format=json');
    const responseData = response.data.sort((a, b) => Date.parse(a.date_time) - Date.parse(b.date_time));

    const sortedAppointments: SortedAppointment[] = [];

    const appointmentsByDate: { [date: string]: DatetimeApi[] } = {};

    responseData.forEach(appointment => {
      const date = appointment.date_time.substring(0, 10);
      if (!appointmentsByDate[date]) {
        appointmentsByDate[date] = [];
      }
      appointmentsByDate[date].push(appointment);
    });

    Object.entries(appointmentsByDate).forEach(([date, appointments]) => {
      const sortedAppointmentsByTime = appointments.sort((a, b) =>
        a.date_time.localeCompare(b.date_time)
      );
      const formattedAppointments = {
        date,
        time: sortedAppointmentsByTime.map(appointment => ({
          id: appointment.id,
          hour: appointment.date_time
        }))
      };
      sortedAppointments.push(formattedAppointments);
    });

    return sortedAppointments
  }
);

export const createAppointment = createAsyncThunk<PostResponse, PostData,  {rejectValue: ValidationError}>(
  'services/createAppointment',
  async (appointment, {rejectWithValue}) => {
    try {
      const response = await axiosApi.post<PostResponse>('/appointments/', appointment);
      const responseData = response.data;
      const successfulResponse: PostResponse = {
        id: responseData.id,
        customer_full_name: responseData.customer_full_name
      };
      return successfulResponse;
    }catch (e) {
      if (isAxiosError(e) && e.response && e.response.status === 400) {
        return rejectWithValue(e.response.data as ValidationError);
      }
      throw e;
    }
  }
);

export const cancelAppointment = createAsyncThunk<void,  {id: number, cancel: PostCancel},  {rejectValue: ValidationError}>(
  'services/cancelAppointment',
  async ({id, cancel}, {rejectWithValue}) => {
    try {
      const response = await axiosApi.patch<PostResponse>(`/appointments/${id}/cancel`,cancel );
      const responseData = response.data;
      console.log(responseData);
    }catch (e) {
      if (isAxiosError(e) && e.response && e.response.status === 400) {
        return rejectWithValue(e.response.data as ValidationError);
      }
      throw e;
    }
  }
);