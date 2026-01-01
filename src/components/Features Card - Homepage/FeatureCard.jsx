import './feature-card.css'

export default function FeatureCard(props){
    return(
        <div className="feature-card-container">
            {/* <img className='feature-img' src="" alt="" /> */}
            <i class={`${props.logoClass} feature-logo`}></i>
            <p className='feature-title'>{props.title}</p>
            <p className='feature-description'>{props.description}</p>
        </div>
    )
}