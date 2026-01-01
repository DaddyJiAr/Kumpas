import './user-review.css'
import DefaultProfilePicture from '../../assets/winter-profile2.jpg'
export default function UserReview(props){
    return(
        <div className="user-review-card-container">
            <div className="review-profile-data">
                <img className='reviewer-profile-picture' src={props?.image || DefaultProfilePicture} alt="Image of the Reviewer" />
                <div className="reviewer-name-date-container">
                    <p className='reviewer-name'>{props.name}</p>
                    <p className='review-date'>{props.date}</p>
                </div>
            </div>
            <div className="review-rating-container">
                {   props.rating &&
                    [...Array(props.rating)].map((_, index)=>(
                        <i key={index} class="fa-solid fa-star"></i>
                    ))
                }
            </div>
            <p className='review-message'>"{props.reviewMessage}"</p>
        </div>
    )
}