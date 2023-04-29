import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';

export default function ActionAreaCard({title,description,icon}) {
  return (
    <Card  sx={{ width:"700px",margin:"auto" }}>
      <CardActionArea>
        <CardContent>
           <div style={{width:"50%"}} >
           <img width={"100%"}  src={icon} alt="icon" />
           </div>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
