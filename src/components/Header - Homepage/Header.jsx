import './header.css'
// import KumpasLogo from '../../assets/Kumpas-Logo.png'
import KumpasLogo from '../../assets/Kumpas-Logo-White-Letters.png'
import Button from '../Button/Button'
import { useEffect } from 'react'
import { NavLink } from 'react-router'

export default function Header(){

    return(
        <div className="main-header-container">
            <div className='homepage-header-container'>
                <NavLink className='header-logo-link' to={'/'}>
                    <div className="header-logo-container">
                        <img className='header-logo-image' src={KumpasLogo} alt="Kumpas Logo" />
                        <p className='header-logo-name'>Kumpas</p>
                    </div>
                </NavLink>
                <div className="header-side-container">
                    <p>Features</p>
                    <p>About</p>
                    <Button text='Sign Up'/>
                </div>
            </div>
            <hr className='grey-line'/>
        </div>
    )
}