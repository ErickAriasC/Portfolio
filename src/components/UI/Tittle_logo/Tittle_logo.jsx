import { Container } from '../../Container/Container'
import { Image_container } from '../../UI/Image_container/Image_container'
import icon_sena from '../../../assets/images/logoSena_sin_fondo.png'


import './Tittle_logo.css'

export const Tittle_logo = ({content}) => {
  return (
    <>
        <Container style='container_tittle_logo' >
                <Image_container url={icon_sena} style='logo' />
                <h2>{content}</h2>
        </Container>
    
    </>
  )
}
