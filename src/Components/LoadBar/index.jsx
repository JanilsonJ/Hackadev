import './loadbar.css'

const LoadBar = (props) => {
    return (
        <div className='loadbar'>
            <p className='loadbar__title' style={props.titleStyle}>{props.title}</p>
            <img className='loadbar__gif' src="/assets/img/LoadBar.gif" alt="" name='Barra de carregamento' style={props.styles}/>
        </div>
    )
}

export default LoadBar