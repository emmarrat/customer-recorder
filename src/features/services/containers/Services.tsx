import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {addService, selectFetching, selectServices} from "../servicesSlice";
import {fetchServices} from "../servicesThunks";
import ServicesCard from "../components/ServicesCard/ServicesCard";
import {Service} from "../../../types";
import './Services.css';

const Services = () => {
  const dispatch = useAppDispatch();
  const services = useAppSelector(selectServices);
  const loading = useAppSelector(selectFetching);
  const addToCart = (service: Service) => {
    dispatch(addService(service));
  };

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  return (
        <div className="services__wrapper">
          {services.map(service => (
            <ServicesCard service={service} key={service.id} onClick={addToCart}/>
          ))}
        </div>
  );
};

export default Services;