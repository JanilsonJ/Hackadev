import './CampoTexto.css'

const CampoTexto = (props) => {
    if (props.type === 'select') {
        return (
            <div className="input-block">
                <label> {props.label} </label>
                <select 
                    name={props.name} 
                    id={props.id}
                    required={props.required}
                    disabled={props.disabled}
                    style={props.style}
                    defaultValue={props.defaultValue}
                >
                    {props.selectOptions.map(option => {
                        return <option key={option} value={option}>{option}</option>
                    })}
                </select>
            </div>
        )
    }
    
    if (props.type === 'urlImage') {
        function image() {
            const imgInput = document.getElementById(props.name).value;
            const imgSrc =  document.getElementById(props.name + 'image');

            const img = new Image();
            img.src = imgInput;
        
            //Caso não consiga carregar a url da imagem será inserida a imagem de produto sem imagem
            img.onload  = () => {imgSrc.setAttribute('src', imgInput)}
            img.onerror = () => {imgSrc.setAttribute('src', '/assets/img/Products/no_product_image.png')}
        }

        return (
            <div className="input-block">
                <label htmlFor={props.name} > {props.label} </label>
                <input 
                    onChange={image}
                    type="text"
                    name={props.name}
                    id={props.name}
                    required={props.required}
                    disabled={props.disabled}
                    style={props.style}
                    defaultValue={props.defaultValue}
                />
                <img alt={props.name} id={props.name + 'image'} src={props.defaultValue} />
            </div>
        )
    }

    return (
        <div className="input-block">
            <label htmlFor={props.name} > {props.label} </label>
            <input id={props.name}
                onChange={props.onChange}
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