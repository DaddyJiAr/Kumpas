import './header.css'
// import KumpasLogo from '../../assets/Kumpas-Logo.png'
import KumpasLogo from '../../assets/Kumpas-Logo-White-Letters.png'
import Button from '../Button/Button'

export default function Header(){
    return(
        <div className="main-header-container">
            <div className='homepage-header-container'>
                <div className="header-logo-container">
                    <img className='header-logo-image' src={KumpasLogo} alt="Kumpas Logo" />
                    <p className='header-logo-name'>Kumpas</p>
                </div>
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