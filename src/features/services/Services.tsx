import React, {useEffect} from 'react';
import {Grid} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectFetching, selectServices} from "./servicesSlice";
import {fetchServices} from "./servicesThunks";
import ServicesCard from "./components/ServicesCard";

const Services = () => {
  const dispatch = useAppDispatch();
  const services = useAppSelector(selectServices);
  const loading = useAppSelector(selectFetching);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  return (
    <Grid container sx={{mt: "200px"}} justifyContent="center" alignItems="start">
      {services.map(service => (
        <Grid item>
          <ServicesCard service={service} key={service.id}/>
        </Grid>
      ))}
    </Grid>
  );
};

export default Services;