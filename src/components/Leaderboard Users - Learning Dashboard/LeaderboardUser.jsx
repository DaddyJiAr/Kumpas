import './leaderboard-user.css'
import HaerinProfile from '../../assets/haerin-profile.png'

export default function LeaderboardUser(props){
    return(
        <div className={`leaderboard-user-container ${props.isUser}`}>
            <p>{props.number}</p>
            <img className='leaderboard-user-picture' src={HaerinProfile} alt="" />
            <p>{props.name}</p>
            <p className='leaderboard-user-xp'>{props.xp}XP</p>
        </div>
    )
}