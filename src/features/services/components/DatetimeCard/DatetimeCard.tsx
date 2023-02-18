import React from 'react';
import {DateObject} from "../../../../types";
import dayjs from "dayjs";
import 'dayjs/locale/ru'

interface Props {
  datetime: DateObject
}


const DatetimeCard: React.FC<Props> = ({datetime}) => {
  return (
    <div className="date-card">
      <div className="date-card__date">
        <h4>{dayjs(datetime.date).locale('ru').format('DD MMMM')}</h4>
      </div>
      <div className="date-card__hour">
        {datetime.hours.map(hours => (
            <button type="button" className="date-card__btn">{hours}</button>
        ))}
      </div>
    </div>
  );
};

export default DatetimeCard;