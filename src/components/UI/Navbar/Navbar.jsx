import './Navbar.css'

export const Navbar = ({children,style}) => {
    return (
        <nav className={style}>
            <ul className='ul_nav'>
                {children}
            </ul>
        </nav>
    )
}
