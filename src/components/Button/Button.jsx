import './button.css'

export default function Button(props){
    return(
        <button className='custom-button' onClick={props?.onClick}
        style={{
            padding: props?.padding !== undefined && `${props.padding}`,
            backgroundColor: props?.bgColor,
            borderRadius: props?.borRad !== undefined && `${props.borRad}px`,
            fontWeight: props?.weight,
            color: props?.textColor,
            fontSize: props?.fontSize !== undefined && `${props.fontSize}`,
        }}>
            {props?.text}
        </button>
    )
}

export function ButtonIcon(props){
    return(
        <i className={`fa-solid ${props.logoClass} custom-button button-icon`}
        style={{
            padding: props?.padding !== undefined && `${props.padding}`,
            backgroundColor: props?.bgColor,
            borderRadius: props?.borRad !== undefined && `${props.borRad}px`,
            fontWeight: props?.weight,
            color: props?.textColor,
            fontSize: props?.fontSize !== undefined && `${props.fontSize}`,
        }}>
            
        </i>
    )
}