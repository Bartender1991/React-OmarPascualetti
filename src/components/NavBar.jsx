import "../css/NavBar.css"
import CartWidget from "./CartWidget"

// import logo from '../assets/react.svg'
const NavBar = () => {
console.log('navbar')
    return (
        <nav className='nav-container'>
            {/* imagen desde public */}
            <img alt='logo' src='../logo.png' className='logo'/>

            {/* iamgen desde src */}
            {/* <img alt='logo' src={logo}/> */}

            <a className='anchor-nav'>Nuevos</a>
            <a className='anchor-nav'>Mas Vendidos</a>
            <a className='anchor-nav'>Ofertas</a>
            <CartWidget/>
        </nav>
    )
}

export default NavBar