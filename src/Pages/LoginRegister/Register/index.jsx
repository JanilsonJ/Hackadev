import { useContext } from "react";
import { UserContext } from "../../../Context/user";

import "./register.css"

const Register = (props) => {
    const { updateUserData } = useContext(UserContext);
    
    const cadastro = (e) => {
        e.preventDefault();

        updateUserData(Array.from(e.target));

        props.setloginComponent(true);
    }

    return (
        <form onSubmit={cadastro} className='form'>
            <div className="title">
                <h1>Cadastre-se na IMA</h1>
            </div>

            <div className="input-box">
                <label>
                    <input type="text" name="nome" placeholder='Nome completo' required/>
                </label>
            </div>  


            <div className="input-box">
                <label>
                    <input type="text" name="cpf" placeholder='CPF' required/>
                </label>
            </div>  

            <div className="input-box">
                <label>
                    <input type="text" name="email" placeholder='E-mail' required/>
                </label>
            </div>   

            <div className="input-box">
                <label>
                    <input type="tel" name="tel" placeholder='Telefone' required/>
                </label>
            </div> 

            <div className="input-box">
                <label>
                    <input type="password" name="senha" placeholder='Senha' required/>
                </label>
            </div>    

            <div className="input-box">
                <label>
                    <input type="password" name="confirmar-senha" placeholder='Confirme sua senha' required/>
                </label>
            </div>

            <div className="login-button">
                <button type='submit'>Cadastre-se</button>
            </div>

        </form>      
    )

}

export default Register