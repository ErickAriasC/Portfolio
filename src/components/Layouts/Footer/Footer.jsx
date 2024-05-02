import './Footer.css'
import { FaWhatsapp, FaFacebookF, FaInstagram,FaLinkedinIn,FaTwitter  } from "react-icons/fa";
import { Navbar } from '../../UI/Navbar/Navbar'
import { ItemNavbar } from '../../UI/ItemNavbar/ItemNavbar'

export const Footer = () => {
    return (
        <>
            <footer>
                <Navbar style='nav_red_social'>
                    <ItemNavbar content={<FaLinkedinIn />} styles='item_red_social' />
                    <ItemNavbar content={<FaFacebookF />} styles='item_red_social' />
                    <ItemNavbar content={<FaInstagram />} styles='item_red_social' />
                    <ItemNavbar content={<FaTwitter />} styles='item_red_social' />
                    <ItemNavbar content={<FaWhatsapp />} styles='item_red_social' />


                </Navbar>
            </footer>
        </>
    )
}
