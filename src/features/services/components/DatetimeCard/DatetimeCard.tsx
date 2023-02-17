import React from 'react';
import {IDatetime} from "../../../../types";
import dayjs from "dayjs";
import 'dayjs/locale/ru'
interface Props {
  datetime: IDatetime
}


const DatetimeCard: React.FC<Props> = ({datetime}) => {
  return (
    <div className="date-card">
      <div className="date-card__date">
          <p> {dayjs(datetime.date_time).locale('ru').format('DD MMMM')}</p>
      </div>
      <div className="date-card__hour">
        <p> {dayjs(datetime.date_time).format('HH:mm')}</p>
      </div>
    </div>
  );
};

export default DatetimeCard;