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

        <div class="input-block">
            <input type={props.type} name="input-text" id={props.id} required spellcheck="false"/>
                <span class="placeholder"> {props.label} </span>
        </div>
    )
}

export default CampoTexto