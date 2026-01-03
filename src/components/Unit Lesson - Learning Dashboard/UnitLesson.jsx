import './unit-lesson.css'
import HaerinProfile from '../../assets/haerin-profile.png'

export default function UnitLesson(props){
    let unitIcon;

    switch(props.unitStatus){
        case 'completed':
            unitIcon = <i className={`fa-solid fa-circle-check unit-lesson-status ${props.unitStatus}`}></i>;
            break;
        case 'ongoing':
            unitIcon = <i className={`fa-solid fa-circle-play unit-lesson-status ${props.unitStatus}`}></i>;
            break;
        case 'locked':
            unitIcon = <i className={`fa-solid fa-lock unit-lesson-status ${props.unitStatus}`}></i>;
            break;
    }
            

    return(
        <div className="unit-lesson-circle-container"
            style={{
                backgroundImage: `url(${HaerinProfile})`,
            }}
        >
            {unitIcon}
           <p className='unit-lesson-title'>{props.unitTitle}</p>
        </div>
    )    

}