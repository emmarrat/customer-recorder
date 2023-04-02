import React from 'react';
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {clearStates, selectBookedDatetime, selectClient} from "../servicesSlice";
import dayjs from "dayjs";
import {Navigate, useNavigate} from "react-router-dom";


const Congrats = () => {
  const date = useAppSelector(selectBookedDatetime);
  const client = useAppSelector(selectClient);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
    dispatch(clearStates());
  }

  if(!client) {
    return <Navigate to="/"/>;
  }

  return (
    <div className="congrats">
      <div className="congrats__wrapper">
        <div className="congrats__content">
          <h4>{client}, cпасибо за доверие! 🌺</h4>
          <h4>Ваша запись сохранена! 💖</h4>
          <h5>
            Ждем вас: <span>{dayjs(date?.hour).locale('ru').format('DD MMMM, в HH:mm')}</span>
          </h5>
          <h5>
            По адресу: <a href="https://go.2gis.com/3gpfa" target="_blank" rel="noreferrer" className="map_link">
            ТЦ "Евразия", 4-й этаж, салон "Kamilla brows"</a>
          </h5>
        </div>
        <div>
          <button className="button" onClick={goHome}>Вернуться на главное меню</button>
        </div>
      </div>
    </div>
  );
};

export default Congrats;