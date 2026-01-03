import './learning-dashboard.css'
import HaerinProfile from '../../assets/haerin-profile.png'
import UnitLesson from '../../components/Unit Lesson - Learning Dashboard/UnitLesson'
import Button from '../../components/Button/Button'
import LeaderboardUser from '../../components/Leaderboard Users - Learning Dashboard/LeaderboardUser'

export default function LearningDashboard(){
    return(
        <div className="learning-dashboard-container"
            style={{
                backgroundImage: HaerinProfile,
            }}
        >
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
                        <i className="fa-solid fa-table-cells learning-section-logo"></i>
                        <p className='learning-section-title'>Dashboard</p>
                    </div>
                    <div className="learning-section">
                        <i className="fa-solid fa-graduation-cap learning-section-logo"></i>
                        <p className='learning-section-title'>Lessons</p>
                    </div>
                    <div className="learning-section">
                        <i className="fa-solid fa-language learning-section-logo"></i>
                        <p className='learning-section-title'>Translator</p>
                    </div>
                    <div className="learning-section">
                        <i className="fa-solid fa-circle-user learning-section-logo"></i>
                        <p className='learning-section-title'>Profile</p>
                    </div>
                    <div className="learning-section">
                        <i className="fa-solid fa-chart-simple learning-section-logo"></i>
                        <p className='learning-section-title'>Leaderboard</p>
                    </div>
                    <button className='settings-button'><i className="fa-solid fa-gear"></i><p>Settings</p></button>
                </div>
            </div>
            <div className="learning-dashboard-main-panel-container">
                <div className="learning-dashboard-header">
                    <p className='learning-dashboard-title'>Welcome back, Haerin!</p>
                    <p className='learning-dashboard-subtitle'>Let's learn some FSL today.</p>
                </div>
                <div className="statistics-list-container">
                    <div className="dashboard-statistic-card-container">
                        <p><i className="fa-solid fa-fire"></i> Day Streak</p>
                        <p className="dashboard-statistic-data">15</p>
                    </div>
                    <div className="dashboard-statistic-card-container">
                        <p><i className="fa-solid fa-book"></i> Signs Mastered</p>
                        <p className="dashboard-statistic-data">120</p>
                    </div>
                    <div className="dashboard-statistic-card-container">
                        <p><i className="fa-solid fa-chart-line"></i> Total XP</p>
                        <p className="dashboard-statistic-data">3200</p>
                    </div>
                </div>
                <div className="learning-dashboard-main-content-container">
                    <div className="learning-dashboard-units-container">
                        <p className="learning-dashboard-unit-title">Unit 1: The Basics</p>
                        <div className="unit-lessons-container">
                            <UnitLesson unitStatus='completed' unitTitle='Kang Haerin'/>
                            <UnitLesson unitStatus='completed' unitTitle='Vanessa'/>
                            <UnitLesson unitStatus='ongoing' unitTitle='Kitty Kang'/>
                            <UnitLesson unitStatus='locked' unitTitle='Baby Ko'/>
                        </div>
                    </div>
                    <div className="learning-dashboard-main-side-content-container">
                        <div className="learning-dashboard-side-content-card">
                            <div className="side-content-header">
                                <p className="side-content-title">Today's Challenge</p>
                            </div>
                            <p className="side-content-description">Translate 5 sentences using the Translator tool.</p>
                            <div className="side-content-reward-container">
                                <i className="fa-solid fa-star side-content-reward-icon"></i>
                                <p className='side-content-reward-text'>+ 20 XP</p>
                            </div>
                            <Button text='Start Challenge' />
                        </div>
                        <div className="learning-dashboard-side-content-card">
                            <div className="side-content-header">
                                <p className="side-content-title">Leaderboard</p>
                                <p className="side-content-view-all">View All</p>
                            </div>
                            <div className="leaderboard-list-container">
                                <LeaderboardUser number='1' name='Vanessa' xp='3000'/>
                                <LeaderboardUser number='2' name='Kang Haerin' xp='3000'/>
                                <LeaderboardUser number='3' name='Kitty Kang' xp='3000' isUser='user'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}