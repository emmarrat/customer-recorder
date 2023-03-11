import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectDatetime, selectFetching} from "./servicesSlice";
import {fetchDatetime} from "./servicesThunks";
import DatetimeCard from "./components/DatetimeCard/DatetimeCard";

const BookDatetime = () => {

  const dispatch = useAppDispatch();
  const datetimes = useAppSelector(selectDatetime);
  const loading = useAppSelector(selectFetching);

  useEffect(() => {
    dispatch(fetchDatetime());
  }, [dispatch]);
  return (
    <div className="container datetime__wrapper ">
      {datetimes && datetimes.map((datetime) => (
        <DatetimeCard datetime={datetime} key={datetime.date}/>
      ))}
    </div>
  );
};

export default BookDatetime;