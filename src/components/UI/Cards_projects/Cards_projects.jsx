import { Container } from '../../Container/Container'
import { Image_container } from '../../UI/Image_container/Image_container'

import './Cards_projects.css'
export const Cards_projects = () => {
  return (
    <>
        <Container style='container_cards'>
            <Image_container url='src\images\Profile.jpg' style='project'/>
            <Container style='content_card'>
                <h3>Tittle</h3>
                <h4>Description</h4>
                <a href="">Ir a proyecto</a>
            </Container>
        </Container>
    </>
  )
}
