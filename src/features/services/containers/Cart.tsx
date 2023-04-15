import React from 'react';
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {removeDatetime, removeService, selectBookedDatetime, selectBookedServices, selectTotal} from "../servicesSlice";
import './Services.css';
import {Service} from "../../../types";
import {Link, useNavigate} from "react-router-dom";
import dayjs from "dayjs";
import {BsArrowLeftCircle} from "react-icons/bs";

const Cart = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const selectedServices = useAppSelector(selectBookedServices);
  const selectedDate = useAppSelector(selectBookedDatetime);
  const total = useAppSelector(selectTotal);

  const removeItem = (service: Service) => {
    dispatch(removeService(service));
  };

  const changeDate = async () => {
    await dispatch(removeDatetime());
    navigate('/book-date');
  }

  return (
    <div className="wrapper">
      <div className="cart__back_wrapper">
        <Link to="/" className=" cart__back">
          <BsArrowLeftCircle/>
        </Link>
      </div>
      <div className="cart">
        <div className="cart__wrapper">
          {selectedServices.length > 0 &&
              <div className="cart__title">
                  <h4>Выбранные услуги:</h4>
              </div>
          }
          {selectedServices.length > 0 && selectedServices.map((service, index) => (
              <div className="cart__items" key={service.id}>
                <div className="cart__item" key={service.id}>
                  <p className="cart__text"> {index + 1}. {service.title} | {service.price} сом</p>
                  <button className="cart__setting_btn cart__remove-btn" onClick={() => removeItem(service)}>
                    Удалить
                  </button>
                </div>
              </div>
          ))}
          {selectedDate && <div className="cart__date">
              <div className="cart__title">
                  <h4>Выбранное время:</h4>
              </div>
              <div className="cart__item">
                  <p className="cart__text">{dayjs(selectedDate?.hour).locale('ru').format('DD MMMM, HH:mm')}</p>
                  <button className="cart__setting_btn cart__change-btn" onClick={changeDate}>
                      Изменить
                  </button>
              </div>
          </div>}
          <h4 className="cart__total">Общая сумма: {total} сом</h4>
        </div>
      </div>
      {!selectedDate &&
          <>
              <div className="cart__btns">
                  <Link to="/book-date" className="button cart__btn">Выбрать день и время</Link>
              </div>
          </>
      }
      {!selectedServices.length &&
          <div className="cart__btns">
              <Link to="/" className="button cart__btn">Выбрать услуги</Link>
          </div>
      }
      {(selectedDate && selectedServices.length !== 0) &&
          <div className="cart__btns">
              <Link to="/book-customer" className="button cart__btn">Оформить запись</Link>
          </div>
      }
    </div>
  );
};

export default Cart;