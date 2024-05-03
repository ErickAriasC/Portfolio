import './Main.css'
import { Container } from '../../Container/Container'
import { Tittle_logo } from '../../UI/Tittle_logo/Tittle_logo'
import { Cards_projects } from '../../UI/Cards_projects/Cards_projects'

export const Main = () => {
    return (
        <>
        <main className='main'>
         <Tittle_logo content='PERFIL'/>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
         <Tittle_logo content='PROYECTOS'/>
         <Container style='container_cards_main'>
            <Cards_projects/>
            <Cards_projects/>
            <Cards_projects/>
            <Cards_projects/>

         </Container>
         <Tittle_logo content='REFERENCIAS'/>
         <Tittle_logo content='EXPERIENCIAS'/>

        </main>

        </>
    )
}