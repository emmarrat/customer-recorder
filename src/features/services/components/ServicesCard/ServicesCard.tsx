import React from 'react';
import {Service} from "../../../../types";
import {IMAGES} from "../../servicesPics";
import './ServicesCard.css';
import {useAppSelector} from "../../../../app/hooks";
import {selectBookedServices} from "../../servicesSlice";

interface Props {
  service: Service;
  onClick: (service: Service) => void;
}

const ServicesCard: React.FC<Props> = ({service, onClick}) => {
  const image = IMAGES.find((img) => img.id === service.id);
  const selectedItems: Service[] = useAppSelector(selectBookedServices);

  const isSelected = selectedItems.some((selected) => selected.id === service.id);

  return (
    <div className="services-card">
      {image && <img className="services-card__img" src={image.image} alt={service.title}/>}
      <div className="services-card__info">
        <h6 className="services-card__info-title">{service.title}</h6>
        <div>
          <p>Продолжительность: {service.duration} минут</p>
          <p>Стоимость: {service.price} сом</p>
        </div>
      </div>
      <div className="services-card__btn">
        <button
          onClick={() => onClick(service)}
          type="button"
          disabled={isSelected}
          className={isSelected ? "button button__selected" : "button"}
        >
          Выбрать
        </button>
      </div>
    </div>
  );
};

export default ServicesCard;