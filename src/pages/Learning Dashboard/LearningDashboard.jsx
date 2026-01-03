import './learning-dashboard.css'
import HaerinProfile from '../../assets/haerin-profile.png'

export default function LearningDashboard(){
    return(
        <div className="learning-dashboard-container">
            <div className="learning-dashboard-side-panel-container">
                <div className="user-dashboard-container">
                    <img className='user-dashboard-image' src={HaerinProfile} alt="" />
                    <div className="user-dashboard-credentials">
                        <p className='user-name'>Kang Haerin</p>
                        <p className='user-greeting'>Welcome back!</p>
                    </div>
                </div>
                <div className="side-learning-sections-container">
                    <div className="learning-section selected">
                        <i className="fa-solid fa-user learning-section-logo"></i>
                        <p className='learning-section-title'>Profile</p>
                    </div>
                    <div className="learning-section">
                        <i className="fa-solid fa-graduation-cap learning-section-logo"></i>
                        <p className='learning-section-title'>Learning</p>
                    </div>
                    <div className="learning-section">
                        <i className="fa-solid fa-bell learning-section-logo"></i>
                        <p className='learning-section-title'>Notifications</p>
                    </div>
                    <div className="learning-section">
                        <i className="fa-solid fa-lock learning-section-logo"></i>
                        <p className='learning-section-title'>Security</p>
                    </div>
                    <button className='settings-button'><i className="fa-solid fa-gear"></i><p>Settings</p></button>
                </div>
            </div>
        </div>
    )
}