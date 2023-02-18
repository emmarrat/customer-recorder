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

export interface Datetime {
  id: number;
  date_time: string;
  status: string;
}

interface DateObject {
  date: string;
  hours: string[];
}