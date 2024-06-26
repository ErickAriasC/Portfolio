import { Image_container } from '../../UI/Image_container/Image_container'
import { Container } from '../../Container/Container'
import { Navbar } from '../../UI/Navbar/Navbar'
import { ItemNavbar } from '../../UI/ItemNavbar/ItemNavbar'
import profile from '../../../assets/images/Profile.jpg'
import icon_sena from '../../../assets/images/logoSena_sin_fondo.png'


import './Header.css'

export const Header = () => {
    return (
        <>
            <header className='header-page'>
                <Image_container url={profile} style='profile' />

                <Container style='container_name_bar_separeitor'>
                    <h1>ERICK ARIAS CARDONA</h1>

                </Container>
                <Navbar style='nav_options'>
                <ItemNavbar content='Perfil' styles='item_navbar_options' />
                <ItemNavbar content='Proyectos' styles='item_navbar_options' />
                <ItemNavbar content='Referencias' styles='item_navbar_options' />
                <ItemNavbar content='Referencias' styles='item_navbar_options' />
                </Navbar>

                <Image_container url={icon_sena} style='logo_sena' />

            </header>
        </>
    )
}
