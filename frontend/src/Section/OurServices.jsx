import React, { useState } from 'react'
import MultiActionAreaCard from '../Component/ActionAreaCard'
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import ActionAreaCard from '../Component/ActionAreaCard';


const OurServices = () => {
  const cardDetails = [{
  "title":"Hello guys",
  "description":"My name is anupam Kumar",
  "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_yG4GzpPz3MfW7mP8yn7-GoWSVODg1jB-Zw&usqp=CAU"
  },
  {
    "title":"Hello guys",
    "description":"My name is anupam Kumar",
    "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_yG4GzpPz3MfW7mP8yn7-GoWSVODg1jB-Zw&usqp=CAU"
    },
    {
      "title":"Hello guys",
      "description":"My name is anupam Kumar",
      "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_yG4GzpPz3MfW7mP8yn7-GoWSVODg1jB-Zw&usqp=CAU"
      },
      {
        "title":"Hello guys",
        "description":"My name is anupam Kumar",
        "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_yG4GzpPz3MfW7mP8yn7-GoWSVODg1jB-Zw&usqp=CAU"
        }];

  return (
    <div style={{display:"flex", flexWrap:"wrap"}}>
            {
              cardDetails.map((e,i) => (
                   <ActionAreaCard title={e.title} description={e.description} icon={e.icon} />
              ))
            }
    </div>
  )
}

export default OurServices