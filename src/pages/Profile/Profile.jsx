import Header from '../../components/Header - Translate & Learning/Header'
import HaerinProfile from '../../assets/haerin-profile.png'
import './profile.css'
import Button, { ButtonIcon } from '../../components/Button/Button'

export default function Profile(){
    return(
        <div className="profile-page-container">
            <Header/>
            <div className="main-profile-section-container">
                <div className="profile-side-panel-container">
                    <div className="user-profile-container">
                        <img className='user-profile-image' src={HaerinProfile} alt="" />
                        <div className="user-profile-credentials">
                            <p className='user-name'>Kang Haerin</p>
                            <p className='user-email'>kittykang0506@gmail.com</p>
                        </div>
                    </div>
                    <div className="side-setting-sections-container">
                        <div className="setting-section selected">
                            <i className="fa-solid fa-user setting-section-logo"></i>
                            <p className='setting-section-title'>Profile</p>
                        </div>
                        <div className="setting-section">
                            <i className="fa-solid fa-graduation-cap setting-section-logo"></i>
                            <p className='setting-section-title'>Learning</p>
                        </div>
                        <div className="setting-section">
                            <i className="fa-solid fa-bell setting-section-logo"></i>
                            <p className='setting-section-title'>Notifications</p>
                        </div>
                        <div className="setting-section">
                            <i className="fa-solid fa-lock setting-section-logo"></i>
                            <p className='setting-section-title'>Security</p>
                        </div>
                    </div>
                </div>
                <div className="profile-main-panel-container">
                    <div className="user-personal-info-container">
                        <div className="user-profile-header-container">
                            <div className="user-profile-container">
                                <img className='main-user-profile-image' src={HaerinProfile} alt="" />
                                <div className="user-profile-credentials">
                                    <p className='main-user-name'>Kang Haerin</p>
                                    <p className='main-user-username'>@kittykang</p>
                                </div>
                            </div>
                            <Button text='Upload new picture' textColor='white' bgColor='var(--highlight-color)' />
                        </div>
                        <div className="user-personal-info-editable-container">
                            <div className="profile-section-header">
                                <p className='profile-section-title'>Personal Information</p>
                            </div>
                            <div className="personal-info-row">
                                <div className="info-input-group">
                                    <label htmlFor="Full Name">Full Name</label>
                                    <input type="text" defaultValue={'Kang Haerin'}/>
                                </div>
                                <div className="info-input-group">
                                    <label htmlFor="Full Name">Username</label>
                                    <input type="text" defaultValue={'@kittykang'}/>
                                </div>
                            </div>
                            <div className="personal-info-row">
                                <div className="info-input-group">
                                    <label htmlFor="Full Name">Email</label>
                                    <input type="text" defaultValue={'kittykang0506@gmail.com'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="learning-statistics-container">
                        <div className="profile-section-header">
                            <p className='profile-section-title'>Learning Statistics</p>
                        </div>
                        <div className="statistics-list-container">
                            <div className="statistic-card-container">
                                <p className='statistic-label'>Total Signs Learned</p>
                                <p className='statistic-data'>128</p>
                            </div>
                            <div className="statistic-card-container">
                                <p className='statistic-label'>Current Streak</p>
                                <p className='statistic-data'>24 Days</p>
                            </div>
                            <div className="statistic-card-container">
                                <p className='statistic-label'>Weekly Progress</p>
                                <div className="statistic-progress-bar-container">
                                    <div className="back-progress-bar"></div>
                                    <div className="main-progress-bar"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="learning-settings-container">
                        <div className="profile-section-header">
                            <p className='profile-section-title'>Learning Statistics</p>
                        </div>
                        <div className="settings-select-row">
                            <div className="info-input-group">
                                <label htmlFor="Full Name">Primary Learning Path</label>
                                <select className='settings-selection' name="" id="">
                                    <option value="FSL for Tagalog Speakers">FSL for Tagalog Speakers</option>
                                    <option value="FSL for English Speakers">FSL for English Speakers</option>
                                </select>
                            </div>
                            <div className="info-input-group">
                                <label htmlFor="Full Name">Daily Goal</label>
                                <select className='settings-selection' name="" id="">
                                    <option value="Regular - 15 mins">Regular - 15 mins</option>
                                    <option value="Regular - 20 mins">Regular - 20 mins</option>
                                    <option value="Regular - 30 mins">Regular - 30 mins</option>
                                </select>
                            </div>
                        </div>
                        <div className="settings-select-row">
                            <label htmlFor="Full Name">Practice Reminders</label>
                            <div className="switch-container">
                                <div className="switch-indicator"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-buttons-container">
                <button className='log-out-button'><i className="fa-solid fa-arrow-right-from-bracket"></i><p>Log Out</p></button>
                <div className="profile-action-buttons-container">
                    <Button text='Cancel' textColor='white' bgColor='var(--semi-transparent4)' border='2px solid var(--end-gradient)'/>
                    <Button text='Save Changes' />
                </div>
            </div>
        </div>
    )
}