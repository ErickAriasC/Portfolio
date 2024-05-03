import './Footer.css'
import { FaWhatsapp, FaFacebookF, FaInstagram,FaLinkedinIn,FaTwitter  } from "react-icons/fa";
import { Navbar } from '../../UI/Navbar/Navbar'
import { ItemNavbar } from '../../UI/ItemNavbar/ItemNavbar'

export const Footer = () => {
    return (
        <>
            <footer>
                <Navbar style='nav_red_social'>
                    <ul className='ul_footer'>
                    <ItemNavbar content={<FaLinkedinIn style={{ color: 'white' }} />} styles='item_red_social' />
                    <ItemNavbar content={<FaFacebookF style={{ color: 'white' }}/>} styles='item_red_social' />
                    <ItemNavbar content={<FaInstagram style={{ color: 'white' }}/>} styles='item_red_social' />
                    <ItemNavbar content={<FaTwitter style={{ color: 'white' }}/>} styles='item_red_social' />
                    <ItemNavbar content={<FaWhatsapp style={{ color: 'white' }}/>} styles='item_red_social' />
                    </ul>
                </Navbar>
            </footer>
        </>
    )
}
