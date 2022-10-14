import { useContext, useState } from "react";
import {useNavigate} from "react-router-dom"

import Button from "../../../Components/Button";

import { UserContext } from "../../../Context/user";

import "./login.css"

const Login = () => {
    const navigate = useNavigate();
    
    const { setLoggedIn, setUserData } = useContext(UserContext);

    const [buttonStyle, setButtonStyle] = useState();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [validating, setValidating] = useState(false);

    const validateLogin = async (e) => {
        e.preventDefault();

        setValidating(true)

        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({email: email, password: password}),
            headers: new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            })
        };

        await fetch(`${process.env.REACT_APP_API_URL.replaceAll('"', '')}customer/auth`, requestOptions)
        .then(response => {
            if (!response.ok)
                throw Error(response.statusText)
            
            return response.json();
        })
        .then(data => {
            setUserData(data);
            setLoggedIn(true);
            navigate("/home");
        }) 
        .catch(err => {
            setValidating(false);
            setButtonStyle({backgroundColor: "#CE5B49", color: "#fefefe"});
            setTimeout(() => {setButtonStyle()}, 1500);
        });
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