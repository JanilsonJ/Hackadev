import './CampoTexto.css'

const CampoTexto = (props) => {

    // const placeholderModificada = `${props.placeholder}`

    return (
        // <div className="campo-texto">
        //     <label>
        //         {props.label}
        //     </label>
        //     <input type={props.type} className='placeholder' placeholder={placeholderModificada}/>
        // </div>

        <div className="input-block">
            <input 
                type={props.type} 
                name={props.name}
                id={props.id}
                // placeholder={props.placeholder}
                required={props.required}
                spellCheck={props.spellCheck}
                defaultValue={props.defaultValue}
                min={props.min}
                max={props.max}
                step={props.step}
                style={props.style}
            />
            
            <span className="placeholder"> {props.label} </span>
        </div>
    )
}

export default CampoTexto