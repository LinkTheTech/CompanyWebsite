import React from 'react';
import "../styles/Footer.css";
import footerLogo from '../images/navlogo.png';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className='mainFooter' >
      <div className='footerDiv' >
        <div className='footerTop' >
          <div className='footerFirst' >
            <img src={footerLogo} alt='' />
            <p>One of the fastest-growing digital marketing agencies in Kolkata, 
            Anonymous Digital’s expertise coupled with their target-oriented approach 
            is what your business requires to reach digital success.
            </p>
          </div>
          <div className='footerSecond'>
            <h3>Services</h3>
            <ul>
              <li>Branding/Rebranding</li>
              <li>Event graphics</li>
              <li>Social media designs</li>
              <li>Video Shoots for promotion</li>
              <li>Video editing & PR</li>
              <li>Packaging design</li>
              <li>Advertisement design</li>
              <li>Web Development</li>
            </ul>
          </div>
          <div className='footerThird'>
            <h3>Details</h3>
            <ul>
              <li>Case Studies</li>
              <li>Blogs</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className='footerFourth'>
            <h3>Contact Us</h3>
            <div>SD7, Uday Shankar Sarani
            Golfgreen, Kolkata - 700095</div>
            <div>+91 7004190523</div>
            <div className='socialIcons' >
              <FacebookOutlinedIcon fontSize='large' />
              <LinkedInIcon fontSize='large' />
              <TwitterIcon fontSize='large'/>
              <InstagramIcon fontSize='large'/>
            </div>
          </div>
        </div>
        <div className='footerBottom' >
          All rights reserved to Anonymous Digital
        </div>
      </div>
    </div>
  )
}

export default Footer