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

export interface Datetime {
  id: number;
  hour: string;
}

interface SortedAppointment {
  date: string;
  time: Datetime[];
}

interface PostData {
  customer_full_name: string;
  customer_phone: string;
  business_hour: number;
  services: number[];
}