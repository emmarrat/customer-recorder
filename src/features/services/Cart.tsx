import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {removeService, selectBookedServices, selectTotal} from "./servicesSlice";
import './Services.css';
import {Service} from "../../types";
import {useNavigate} from "react-router-dom";

const Cart = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const selectedServices = useAppSelector(selectBookedServices);
  const total = useAppSelector(selectTotal);
  const removeItem = (service: Service) => {
    dispatch(removeService(service));
  };

  useEffect( () => {
    if(selectedServices.length === 0) {
      navigate('/');
    }
  }, [selectedServices, navigate]);

  return (
      <div className="cart">
        <div className="cart__wrapper">
          <div className="cart__title">
            <h4>Вы выбрали:</h4>
          </div>
          <div className="cart__items">
            {selectedServices.map((service, index) => (
              <div className="cart__item" key={service.id}>
                <p className="cart__text"> {index+1}.  {service.title} | {service.price} сом</p>
                <button className="cart__remove-btn" onClick={() => removeItem(service)}>
                  Удалить
                </button>
              </div>
            ))}
          </div>
            <h4 className="cart__total">Общая сумма: {total} сом</h4>
        </div>
      </div>
  );
};

export default Cart;