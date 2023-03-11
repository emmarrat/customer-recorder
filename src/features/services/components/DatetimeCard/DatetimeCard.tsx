import React, {useState} from 'react';
import {Datetime, SortedAppointment} from "../../../../types";
import dayjs from "dayjs";
import 'dayjs/locale/ru';
import './DatetimeCard.css';
import {useAppDispatch, useAppSelector} from "../../../../app/hooks";
import {addDatetime, selectBookedDatetime, selectBookedServices} from "../../servicesSlice";
import {Navigate, useNavigate} from "react-router-dom";

interface Props {
  datetime: SortedAppointment
}

const DatetimeCard: React.FC<Props> = ({datetime}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const selectedServices = useAppSelector(selectBookedServices);
  const selectedDatetime = useAppSelector(selectBookedDatetime);
  const [isSelected, setIsSelected] =  useState(false);

  const chooseDatetime = (bookTime: Datetime) => {
    dispatch(addDatetime(bookTime));
    setIsSelected(true);
    if(selectedServices.length === 0) {
      navigate('/');
    } else {
      navigate('/book-customer');
    }
  };

  if(selectedDatetime) {
    return <Navigate to='/book-customer'/>
  }

  return (
    <div className="date-card">
      <div className="date-card__date">
        <h4>{dayjs(datetime.date).locale('ru').format('DD MMMM')}</h4>
      </div>
      <div className="date-card__hour">
        {datetime.time.map(hours => (
          <button
            onClick={() => chooseDatetime(hours)}
            type="button"
            disabled={isSelected}
            className="date-card__btn"
            key={hours.id}
          >
            {dayjs(hours.hour).format('HH:mm')}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DatetimeCard;