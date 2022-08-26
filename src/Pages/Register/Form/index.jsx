import {useNavigate} from "react-router-dom"
import "./form.css"
const Form = () => {
    const navigate = useNavigate();

    const cadastro = (e) => {
        e.preventDefault();

        navigate("/home");
    }

    

    return (
        <>
            <form className='form'>
                <div className="title">
                    <h1>Cadastre-se na <span>IMA</span></h1>
                </div>

                <div className="input-group">
                    <div className="input-box">
                        <label>
                            <input type="text" name="nome" placeholder='Digite seu nome' required/>
                        </label>
                    </div>
                </div>

                <div className="input-group">
                    <div className="input-box">
                        <label>
                            <input type="text" name="email" placeholder='Digite seu email' required/>
                        </label>
                    </div>    
                </div>

                <div className="input-group">
                    <div className="input-box">
                        <label>
                            <input type="tel" name="tel" placeholder='(xx) xxxxx-xxxx' required/>
                        </label>
                    </div>    
                </div>

                <div className="input-group">
                    <div className="input-box">
                        <label>
                            <input type="password" name="senha" placeholder='Digite seu senha' required/>
                        </label>
                    </div>    
                </div>

                <div className="input-group">
                    <div className="input-box">
                        <label>
                            <input type="password" name="confirmar-senha" placeholder='Confirme sua senha' required/>
                        </label>
                    </div>    
                </div>

                <div className="login">
                    <p>Já tem cadastro ? <a href="">Fazer Login</a></p>
                </div>  

                <div className="login-button">
                    <button onClick={cadastro} type='submit'><a>Cadastre-se</a></button>
                </div>

            </form>        
        </>
    )

}

export default Form