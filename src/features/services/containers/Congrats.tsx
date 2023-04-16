import React from 'react';
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {clearPostResponse, selectBookedDatetime, selectResponse} from "../servicesSlice";
import dayjs from "dayjs";
import {Navigate, useNavigate} from "react-router-dom";

const Congrats = () => {
  const date = useAppSelector(selectBookedDatetime);
  const response = useAppSelector(selectResponse);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
    dispatch(clearPostResponse());
  }

  if (!response) {
    return <Navigate to="/"/>;
  }

  return (
    <div className="congrats">
      <div className="congrats__wrapper">
        <div className="congrats__content">
          <h4>{response?.customer_full_name}, cпасибо за доверие! <span aria-hidden="true" role="img">🌺</span></h4>
          <h4>Ваша запись сохранена! <span aria-hidden="true" role="img">💖</span></h4>
          <h5>
            Ждем вас: <span>{dayjs(date?.hour).locale('ru').format('DD MMMM, в HH:mm')}</span>
          </h5>
          <h5>
            По адресу: <a href="https://go.2gis.com/3gpfa" target="_blank" rel="noreferrer" className="map_link">
            ТЦ "Евразия", 4-й этаж, 407 кабинет</a>
          </h5>
          <p className="congrats__links-title">Запомните номер вашей записи: <span style={{color: 'e05959'}}>{response?.id}</span><br/>
            Он понадобится если вы захотите отменить запись
          </p>
        </div>
        <div>
          <button className="button" onClick={goHome}>Вернуться на главное меню</button>
        </div>
      </div>
    </div>
  );
};

export default Congrats;