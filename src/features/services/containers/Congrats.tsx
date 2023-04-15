import React from 'react';
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {clearStates, selectBookedDatetime, selectResponse} from "../servicesSlice";
import dayjs from "dayjs";
import {Navigate, useNavigate} from "react-router-dom";
import {BsInstagram, BsTelephoneOutbound, BsWhatsapp} from "react-icons/bs";

const Congrats = () => {
  const date = useAppSelector(selectBookedDatetime);
  const response = useAppSelector(selectResponse);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
    dispatch(clearStates());
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
          <div>
            <p className="congrats__links-title">Если у вас будут вопросы, свяжитесь со мной:</p>
            <div className="congrats__links">
              <a href="https://wa.me/996995708885" target="_blank" rel="noreferrer"
                 className="congrats-link">
                what's app
                <BsWhatsapp/>
              </a>
              <a href="https://www.instagram.com/aijanabrows/" target="_blank" rel="noreferrer"
                 className="congrats-link">
                instagram
                <BsInstagram/>
              </a>
              <a href="tel:+996995708885" className="congrats-link congrats__phone">
                0995 708 885
                <BsTelephoneOutbound/>
              </a>
            </div>
          </div>
          <p className="congrats__links-title">Запомните это число: <span style={{color: 'e05959'}}>{response?.id}</span><br/>
            Оно понадобиться если вы захотите отменить запись
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