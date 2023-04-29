import React, { useState } from 'react'
import MultiActionAreaCard from '../Component/ActionAreaCard'
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import ActionAreaCard from '../Component/ActionAreaCard';
import { Typography } from '@mui/material';
import images from "../images/pngwing.com.png";
import images1 from "../images/eventgraphics.png.png";
import images2 from "../images/socialmedia.png";
import images3 from "../images/videoshoots.png";
import images4 from "../images/videoediting.png";
import images5 from "../images/packaging.png";
import images6 from "../images/advertising.png";
import images7 from "../images/webdevelopment.png";





const OurServices = () => {
  const cardDetails = [{
  "title":"Branding/Rebranding",
  "description":"My name is anupam Kumar",
  "icon":images
  },
  {
    "title":"Event Graphics",
    "description":"My name is anupam Kumar",
    "icon": images1
    },
    {
      "title":"Social Media Designs",
      "description":"My name is anupam Kumar",
       "icon": images2
    },
      {
        "title":"Video Shoots For Promotion",
        "description":"My name is anupam Kumar",
        "icon": images3

        },
        {
          "title":"Video Editing and PR",
          "description":"My name is anupam Kumar",
          "icon": images4
        },
          {
            "title":"Packaging Design",
            "description":"My name is anupam Kumar",
            "icon": images5
          },
            {
              "title":"Advertisement Design",
              "description":"My name is anupam Kumar",
              "icon": images6
            },
              {
                "title":"Web Development",
                "description":"My name is anupam Kumar",
                "icon": images7

                }];

  return (
    <div>
      <Typography style={{marginTop:"100px",paddingLeft:"5%"}} variant='h1'>Our Services</Typography>
       <div style={{display:"flex", flexWrap:"wrap"}}>
            {
              cardDetails.map((e,i) => (
                   <ActionAreaCard  title={e.title} description={e.description} icon={e.icon} />
              ))
            }
    </div>
    </div>
  )
}

export default OurServices