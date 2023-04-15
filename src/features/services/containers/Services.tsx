import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {addService, selectFetching, selectServices} from "../servicesSlice";
import {fetchServices} from "../servicesThunks";
import ServicesCard from "../components/ServicesCard/ServicesCard";
import {Service} from "../../../types";
import './Services.css';
import {TailSpin} from "react-loader-spinner";

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
          {loading && <TailSpin
              height="80"
              width="80"
              color="#ef9b9b"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
          />}
        </div>
  );
};

export default Services;