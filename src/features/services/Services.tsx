import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectFetching, selectServices} from "./servicesSlice";
import {fetchServices} from "./servicesThunks";
import ServicesCard from "./components/ServicesCard/ServicesCard";

const Services = () => {
  const dispatch = useAppDispatch();
  const services = useAppSelector(selectServices);
  const loading = useAppSelector(selectFetching);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  return (
    <div className="services__wrapper">
      {services.map(service => (
          <ServicesCard service={service} key={service.id}/>
      ))}
    </div>
  );
};

export default Services;