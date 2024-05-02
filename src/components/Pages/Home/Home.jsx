import {Header} from '../../Layouts/Header/Header'
import {Main} from '../../Layouts/Main/Main'
import{Container} from '../../Container/Container'
import {Footer} from '../../Layouts/Footer/Footer'

import './Home.css'

export const Home=()=> {
  return (
    <>
      <Container style='home'>
       <Container style='container_header_footer'>
        <Header />
        <Footer/>
      </Container>

      <Main/>
        
      </Container>

    </>
  )
}
