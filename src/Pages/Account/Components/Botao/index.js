import './botao.css'

const Botao = (props) => {
    return (<div className='Container__Botao'>
    
    <button className='botao'> {props.children}</button>
    </div>
    )
}

export default Botao