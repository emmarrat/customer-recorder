import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {selectDatetime, selectFetching} from "../servicesSlice";
import {fetchDatetime} from "../servicesThunks";
import DatetimeCard from "../components/DatetimeCard/DatetimeCard";
import {TailSpin} from "react-loader-spinner";

const BookDatetime = () => {

  const dispatch = useAppDispatch();
  const datetimes = useAppSelector(selectDatetime);
  const loading = useAppSelector(selectFetching);

  useEffect(() => {
    dispatch(fetchDatetime());
  }, [dispatch]);
  return (
    <>
      {loading && (
        <div className="container datetime__wrapper ">
          <TailSpin
            height="80"
            width="80"
            color="#ef9b9b"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>)}
      <div className="container datetime__wrapper ">
        {datetimes.length > 0 ? datetimes.map((datetime) => (
          <DatetimeCard datetime={datetime} key={datetime.date}/>
        )) : <h4>Извините пока нет свободных окошек для записи <span aria-hidden="true" role="img">🥺</span></h4>}
      </div>

    </>

  );
};

export default BookDatetime;