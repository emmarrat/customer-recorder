export interface Service {
  id: number;
  title: string;
  price: string;
  duration: number;
  info: string;
}

export interface Images {
  id: number;
  image: string;
}

export interface DatetimeApi {
  id: number;
  date_time: string;
  status: string;
}

interface Customer {
  name: string;
  phone: string;
}

export interface Datetime {
  id: number;
  hour: string;
}

interface SortedAppointment {
  date: string;
  time: Datetime[];
}