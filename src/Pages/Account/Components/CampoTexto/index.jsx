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
    
    if (props.type === 'urlImage') {
        function image() {
            var input_value = document.getElementById(props.name).value;
            var image = document.getElementById(props.name + 'image');
            image.setAttribute('src', input_value);
        }

        return (
            <div className="input-block">
                <label htmlFor={props.name} > {props.label} </label>
                <input 
                    onChange={image}
                    type="url"
                    name={props.name}
                    id={props.name}
                />
                <img alt={props.name} id={props.name + 'image'} />
            </div>
        )
    }

    return (
        <div className="input-block">
            <label htmlFor={props.name} > {props.label} </label>
            <input id={props.name}
                type={props.type} 
                name={props.name}
                maxLength={props.maxLength}
                // placeholder={props.placeholder}
                required={props.required}
                disabled={props.disabled}
                checked={props.checked}
                spellCheck={props.spellCheck}
                defaultValue={props.defaultValue}
                size={props.size}
                min={props.min}
                max={props.max}
                step={props.step}
                style={props.style}
            />
        </div>
    )
}

export default CampoTexto