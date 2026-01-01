import './step.css'

export default function Step(props){
    console.log(props.hasNext);
    
    return(
        <div className="step-inner-card-container">
            <div className="step-logo-container">
                <i class={`${props.logoClass} step-logo`}></i>
                {
                    props.hasNext === true &&
                    <>
                        <hr className='vertical-line-connector'/>
                    </>
                }
            </div>
            <div className="step-words">
                <p className='step-title'>{props.title}</p>
                <p className='step-description'>{props.description}</p>
            </div>
        </div>
            
    )
}