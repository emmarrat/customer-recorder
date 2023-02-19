import React from 'react';
import {Service} from "../../../../types";
import '../../Services.css'

interface Props {
  services: Service[]
}
const Cart: React.FC<Props> = ({services}) => {
  return (
    <div className="cart">
      <div className="cart__wrapper">
        <div className="cart__title">
          <h4>Выбранные процедуры:</h4>
        </div>
        <div>
          {services.map((service) => (
            <p className="cart__item">{service.title} | {service.price} сом</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;