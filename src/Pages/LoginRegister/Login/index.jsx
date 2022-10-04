import { useContext, useState } from "react";
import {useNavigate} from "react-router-dom"

import Button from "../../../Components/Button";

import { UserContext } from "../../../Context/user";
import useFetch from "../../../hooks/useFetch";

import "./login.css"

const Login = () => {
    const navigate = useNavigate();
    
    const { setLoggedIn, login } = useContext(UserContext);

    const [buttonStyle, setButtonStyle] = useState();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const body = {email: email, password: password};

    const { data: validUser, isFetching: validating } = useFetch('customer_validate', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        })
    })

    const validateLogin = (e) => {
        e.preventDefault();

        if (validUser) {
            setLoggedIn(true);
            login(validUser);
            navigate("/home");
        } else {
            setButtonStyle({backgroundColor: "#CE5B49", color: "#fefefe"});
            setTimeout(() => {setButtonStyle()}, 1500);
        }
    }

    return (
        <form onSubmit={validateLogin} className='form'>
            <div className="title">
                <h1>Entrar na IMA</h1>
            </div>

            <div className="input-box">
                <label>
                    <input onKeyUp={(e) => setEmail(e.target.value)} type="text" name="email" placeholder='E-mail' required/>
                </label>
            </div>   

            <div className="input-box">
                <label>
                    <input onKeyUp={(e) => setPassword(e.target.value)}  type="password" name="senha" placeholder='Senha' required/>
                </label>
            </div>    

            <div className="login-button">
                    <Button type="submit" styles={buttonStyle}>{validating ? 'Validando...' : 'Logar'}</Button>
            </div>

        </form>      
    )

}

export default Login