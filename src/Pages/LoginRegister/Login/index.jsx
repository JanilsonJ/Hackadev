import { useContext, useState } from "react";
import {useNavigate} from "react-router-dom"

import Button from "../../../Components/Button";

import { UserContext } from "../../../Context/user";
import useFetch from "../../../hooks/useFetch";

import "./login.css"

const Login = () => {
    const navigate = useNavigate();
    
    const [body, setBody] = useState({});

    const { setLoggedIn, setUserData } = useContext(UserContext);

    const { data } = useFetch('customer_validate', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        })
    })

    const validateLogin = (e) => {
        e.preventDefault();

        if (data) {
            setLoggedIn(true);
            setUserData(data);
            navigate("/home");
        }
    }

    return (
        <form onSubmit={validateLogin} className='form'>
            <div className="title">
                <h1>Entrar na IMA</h1>
            </div>

            <div className="input-box">
                <label>
                    <input onChange={(e) => setBody({email: e.target.value, password: body?.password})} type="text" name="email" placeholder='E-mail' required/>
                </label>
            </div>   

            <div className="input-box">
                <label>
                    <input onChange={(e) => setBody({email: body?.email, password: e.target.value})}  type="password" name="senha" placeholder='Senha' required/>
                </label>
            </div>    

            <div className="login-button">
                <Button type="submit">Logar</Button>
            </div>

        </form>      
    )

}

export default Login