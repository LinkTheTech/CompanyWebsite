import React, { useState } from 'react';
import "../styles/Navbar.css";
import navlogo from '../images/navlogo.png';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import BrandingWatermarkOutlinedIcon from '@mui/icons-material/BrandingWatermarkOutlined';
import AutoGraphRoundedIcon from '@mui/icons-material/AutoGraphRounded';
import Groups3RoundedIcon from '@mui/icons-material/Groups3Rounded';
import VideoCameraFrontOutlinedIcon from '@mui/icons-material/VideoCameraFrontOutlined';
import VideoSettingsOutlinedIcon from '@mui/icons-material/VideoSettingsOutlined';
import DrawOutlinedIcon from '@mui/icons-material/DrawOutlined';
import AutofpsSelectOutlinedIcon from '@mui/icons-material/AutofpsSelectOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

const Navbar = () => {
 
  const [click,setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }

    const [color,setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 100){
            setColor(true)
        }
        else{
            setColor(false)
        }
    };

    window.addEventListener("scroll" , changeColor)


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const serviceClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
  
  return (
    <div className={color ? "header header-bg" : "header"} >
        <a to="/" >
          <img className='navlogo' src={navlogo} />
        </a>
        <ul className={click ? "nav-menu active" : "nav-menu"} >
            <li>
                <a href="/" >Home</a>
            </li>
            <li className='services'  onClick={serviceClick} >
                <button href="/" id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                 >Services</button>
                <KeyboardArrowDownRoundedIcon />
            </li>
            <li>
                <a href="/" >Contact</a>
            </li>
          
        </ul>
        <div className="hamburger" onClick={handleClick} >
            {click ? (<p>open</p>)
             : (<p>open</p>)}
        </div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          PaperProps={{  
            style: {  
              width: 350,
              marginTop:"20px"  
            },  
         }} 
        >
          <MenuItem onClick={handleClose} style={{display:"flex",justifyContent:"space-between"}}>Branding/Rebranding <BrandingWatermarkOutlinedIcon/> </MenuItem>
          <MenuItem onClick={handleClose} style={{display:"flex",justifyContent:"space-between"}}>Event graphics <AutoGraphRoundedIcon/></MenuItem>
          <MenuItem onClick={handleClose} style={{display:"flex",justifyContent:"space-between"}}>Social media designs <Groups3RoundedIcon/></MenuItem>
          <MenuItem onClick={handleClose} style={{display:"flex",justifyContent:"space-between"}}>Video Shoots for promotion <VideoCameraFrontOutlinedIcon/></MenuItem>
          <MenuItem onClick={handleClose} style={{display:"flex",justifyContent:"space-between"}}>Video editing & PR <VideoSettingsOutlinedIcon/></MenuItem>
          <MenuItem onClick={handleClose} style={{display:"flex",justifyContent:"space-between"}}>Packaging design <DrawOutlinedIcon/></MenuItem>
          <MenuItem onClick={handleClose} style={{display:"flex",justifyContent:"space-between"}}>Advertisement design <AutofpsSelectOutlinedIcon/></MenuItem>
          <MenuItem onClick={handleClose} style={{display:"flex",justifyContent:"space-between"}}>Web Development <LanguageOutlinedIcon/></MenuItem>
        </Menu>
    </div>
  )
}

export default Navbar