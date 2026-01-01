import './button.css'

export default function Button(props){
    return(
        <button className='custom-button'
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