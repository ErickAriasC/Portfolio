import { Container } from '../../Container/Container'
import { Image_container } from '../../UI/Image_container/Image_container'

import './Tittle_logo.css'

export const Tittle_logo = ({content}) => {
  return (
    <>
        <Container style='container_tittle_logo' >
                <Image_container url='src\images\logoSena_sin_fondo.png' style='logo' />
                <h2>{content}</h2>
        </Container>
    
    </>
  )
}
