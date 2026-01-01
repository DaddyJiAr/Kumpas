import { NavLink } from 'react-router'
import './footer.css'
import KumpasLogo from '../../assets/Kumpas-Hand-Sign-Black-and-White.png'
export default function Footer(){
    return(
        <div className="footer-container">
            <div className="copyright-section-container">
                <img className='footer-kumpas-logo' src={KumpasLogo} alt="Small logo of Kumpas" />
                <p>© 2024 Kumpas. All rights reserved.</p>
            </div>
            <div className="footer-links-container">
                <NavLink >Terms of Service</NavLink>
                <NavLink >Privacy Policy</NavLink>
                <NavLink >Contact</NavLink>
            </div>
        </div>
    )
}