import React from 'react';
import {SortedAppointment} from "../../../../types";
import dayjs from "dayjs";
import 'dayjs/locale/ru';
import './DatetimeCard.css';

interface Props {
  datetime: SortedAppointment
}

const DatetimeCard: React.FC<Props> = ({datetime}) => {
  return (
    <div className="date-card">
      <div className="date-card__date">
        <h4>{dayjs(datetime.date).locale('ru').format('DD MMMM')}</h4>
      </div>
      <div className="date-card__hour">
        {datetime.time.map(hours => (
            <button type="button" className="date-card__btn" key={hours.id}>{dayjs(hours.hour).format('HH:mm')}</button>
        ))}
      </div>
    </div>
  );
};

export default DatetimeCard;