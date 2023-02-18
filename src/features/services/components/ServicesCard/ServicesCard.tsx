import React from 'react';
import {Service} from "../../../../types";
import {IMAGES} from "../../../../servicesPics";
import '../../Services.css';

interface Props {
  service: Service;
}

const ServicesCard: React.FC<Props> = ({service}) => {

  const image = IMAGES.find((img) => img.id === service.id);

  return (
      <div className="services-card">
          {image && <img className="services-card__img" src={image.image} alt={service.title}/>}
        <div className="services-card__info">
          <h6 className="services-card__info-title">{service.title}</h6>
          <div>
            <p>Процедура длится: {service.duration} минут</p>
            <p>Стоимость: {service.price} сом</p>
          </div>
        </div>
        <div className="services-card__btn">
          <button type="button">Выбрать</button>
        </div>
      </div>
  );
};

export default ServicesCard;