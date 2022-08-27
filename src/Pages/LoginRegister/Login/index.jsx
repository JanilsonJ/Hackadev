import { useContext } from "react";
import {useNavigate} from "react-router-dom"
import { UserContext } from "../../../Context/user";
import "./login.css"

const Login = () => {
    const navigate = useNavigate();
    
    const { setLoggedIn } = useContext(UserContext);

    const login = (e) => {
        e.preventDefault();

        setLoggedIn(true)

        navigate("/home");
    }

    return (
        <form onSubmit={login} className='form'>
            <div className="title">
                <h1>Entrar na IMA</h1>
            </div>

            <div className="input-box">
                <label>
                    <input type="text" name="email" placeholder='E-mail' required/>
                </label>
            </div>   

            <div className="input-box">
                <label>
                    <input type="password" name="senha" placeholder='Senha' required/>
                </label>
            </div>    

            <div className="login-button">
                <button type='submit'>Logar</button>
            </div>

        </form>      
    )

}

export default Login