import './button.css'

const Button = ({children}, props) => {
    return (
        <button className='component_button' type={props.type} name={props.name}>
            {children}
        </button>
    )
}

export default Button