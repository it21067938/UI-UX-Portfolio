import React from 'react'
import { SocialMedia } from '../../components'
import './footer.css'

//Material Icons
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

function Footer() {
    return (
        <div className='footer section-padding'>
            <div className='contact-details'>
                <div className='contact-details-wrapper'>
                    <div className='address contact-details-child'>
                        <LocationOnIcon fontSize='large' sx={{color: '#fff'}} />
                        <p>No.124/1, Subadhrarama Rd,  <br /> Thenkallagoda, Galle</p>
                    </div>
                    <div className='email contact-details-child'>
                        <EmailIcon fontSize='large' sx={{color: '#fff'}} />
                        <p>amaleeshadewmini1999@gmail.com</p>
                    </div>
                    <div className='phone contact-details-child'>
                        <CallIcon fontSize='large' sx={{color: '#fff'}} />
                        <p>+94 77 4563 866</p>
                    </div>
                </div>

            </div>
            <SocialMedia />
            <div className='footer-copyright'>
                <p>© 2024 MALEESHA. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
