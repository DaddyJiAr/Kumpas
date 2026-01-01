import './button.css'

export default function Button(props){
    return(
        <button className='custom-button'
        style={{
            padding: props?.padding !== undefined && `${props.padding}px`,
            backgroundColor: props?.bgColor,
            borderRadius: props?.borRad !== undefined && `${props.borRad}px`,
            fontWeight: props?.weight,
            color: props?.textColor,
        }}>
            {props?.text}
        </button>
    )
}