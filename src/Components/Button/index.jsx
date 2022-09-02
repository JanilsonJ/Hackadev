import './button.css'

const Button = (props) => {
    return (
        <button className='component_button' type={props.type} name={props.name} style={props.styles}>
            {props.children}
        </button>
    )
}

export default Button