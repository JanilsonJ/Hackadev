import './CampoTexto.css'

const CampoTexto = (props) => {
    if (props.type === 'select') {
        return (
            <div className="input-block">
                <label> {props.label} </label>
                <select name={props.name} id={props.id}>
                    {props.selectOptions.map(option => {
                        return <option key={option} value={option}>{option}</option>
                    })}
                </select>
            </div>
        )
    }

    return (
        <div className="input-block">
            <label htmlFor={props.name} > {props.label} </label>
            <input id={props.name}
                type={props.type} 
                name={props.name}
                maxLength={props.maxlength}
                // placeholder={props.placeholder}
                required={props.required}
                disabled={props.disabled}
                checked={props.checked}
                spellCheck={props.spellCheck}
                defaultValue={props.defaultValue}
                min={props.min}
                max={props.max}
                step={props.step}
                style={props.style}
            />
        </div>
    )
}

export default CampoTexto