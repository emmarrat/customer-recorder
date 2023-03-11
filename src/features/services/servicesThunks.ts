import {createAsyncThunk} from "@reduxjs/toolkit";
import {Datetime, Service, SortedAppointment} from "../../types";
import axiosApi from "../../axiosApi";

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
    const response = await axiosApi.get<Datetime[]>('business-hours/?format=json');
    const responseData = response.data.sort((a, b) => Date.parse(a.date_time) - Date.parse(b.date_time));

    const sortedAppointments: SortedAppointment[] = [];

    const appointmentsByDate: { [date: string]: Datetime[] } = {};

    responseData.forEach(appointment => {
      const date = appointment.date_time.substring(0, 10);
      if (!appointmentsByDate[date]) {
        appointmentsByDate[date] = [];
      }
      appointmentsByDate[date].push(appointment);
    });

    // Sort appointments by time and format them for output
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