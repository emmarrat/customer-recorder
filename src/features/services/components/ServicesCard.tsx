import React from 'react';
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {IService} from "../../../types";
import {IMAGES} from "../../../servicesPics";

interface Props {
  service: IService;
}

const ServicesCard: React.FC<Props> = ({service}) => {

  const image = IMAGES.find((img) => img.id === service.id);

  return (
    <Card sx={{ width: 310, m: 1, display: "flex", flexDirection: "column", alignItems: "start"}}>
      <CardActionArea sx={{
        flexGrow: 2,
        flexShrink: 2,
        display: "flex", flexDirection: "column", alignItems: "start"
      }}>
        {image && <CardMedia sx={{style: "width: 300px; height: 150px; object-fit: cover", flexShrink: 0, flexGrow: 0}}
          component="img"
          image={image.image}
          alt={service.title}
        />}
        <CardContent sx={{flexGrow: 1, flexShrink: 1}}>
          <Typography gutterBottom variant="h6" component="div">
            {service.title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
           Процедура длится: {service.duration} минут
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Стоимость: {service.price} сом
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ flexShrink: 0, flexGrow: 0}}>
        <Button type="button" variant="outlined" size="medium" color="inherit">
          Выбрать
        </Button>
      </CardActions>
    </Card>
  );
};

export default ServicesCard;