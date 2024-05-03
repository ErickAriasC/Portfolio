import { Container } from '../../Container/Container'

import './Cards_experiens.css'

export const Cards_experiens = ({content,url,style}) => {
  return (
    <>
    <Container style='card_experiens'>
        <img className='img_experiens' src={url} />        
        <Container style='progress-bar'>
            <Container style='progress'>
            </Container>
        </Container>
        <h3>{content}</h3>

    </Container>
    
    </>
  )
}
