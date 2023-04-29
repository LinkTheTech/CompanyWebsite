import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';

export default function ActionAreaCard({title,description,icon}) {
  return (
    <Card sx={{borderRadius:"20px", width:"40%",margin:"auto", marginTop:"100px" }}>
      <CardActionArea style={{background: "#9CECFB",
background: "-webkit-linear-gradient(to right, #0052D4, #65C7F7, #9CECFB)", /* Chrome 10-25, Safari 5.1-6 */
background: "linear-gradient(to right, #0052D4, #65C7F7, #9CECFB)"/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}}>
        <CardContent style={{borderRadius:"20px",boxShadow: "pink 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px, rgb(255, 85, 85) 40px -40px"}}>
           <img style={{height:"200px"}} src={icon} alt="icon" />
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
