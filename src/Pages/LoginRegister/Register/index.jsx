import { useState } from "react";
import Button from "../../../Components/Button";

import "./register.css"

const Register = (props) => {
    const [buttonStyle, setButtonStyle] = useState();

    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [birth, setBirth] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    
    const [wrongEntry, setWrongEntry] = useState(false);
    const [validating, setValidating] = useState(false);

    const postNewUser = async (userData) => {
        const api = process.env.REACT_APP_API_URL.replaceAll('"', '') + 'customer';

        setValidating(true);

        const options = {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            })
        }

        await fetch(api, options)
        .then(async (response) => {
            if (!response.ok)
                throw new Error(await response.text())

            props.setloginComponent(true);
        })
        .catch(err => {
            setWrongEntry(err.message);
            
            setButtonStyle({backgroundColor: "#CE5B49", color: "#fefefe"});
            setTimeout(() => {setButtonStyle()}, 1500);
            setWrongEntry('As senhas informadas não correspondem!');
        })
        .finally(() => {
            setValidating(false);
        });
    }

    const cadastro = async (e) => {
        e.preventDefault();

        setWrongEntry(false);

        const userData = {
            name: name,
            cpf: cpf,
            birth: birth,
            email: email,
            tel: tel,
            password: password
        };
        
        if (password !== passwordConfirm){
            setButtonStyle({backgroundColor: "#CE5B49", color: "#fefefe"});
            setTimeout(() => {setButtonStyle()}, 1500);
            setWrongEntry('As senhas informadas não correspondem!');
        } else {
            postNewUser(userData);
        };
    }

    const cpfMask = (value) => {
        value = value
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1')

        setCpf(value)
    }

    return (
        <form onSubmit={cadastro} className='form'>
            <div className="title">
                <h1>Cadastre-se na IMA</h1>
            </div>

            <p style={{color: '#CE5B49', fontSize:'10px', fontWeight: 'bold'}}>
                {wrongEntry !== false ? wrongEntry : null}
            </p>

            <div className="input-box">
                <label>
                    <input type="text" name="nome" placeholder='Nome completo' onKeyUp={(e) => setName(e.target.value)} required/>
                </label>
            </div>  

            <div className="input-box">
                <label>
                    <input type="text" maxLength='14' name="cpf" placeholder='CPF' value={cpf} onChange={(e) => cpfMask(e.target.value)} required/>
                </label>
            </div>  

            <div className="input-box">
                <label>
                    <input type="date" name="birth" placeholder='Data de Nascimento' onChange={(e) => setBirth(e.target.value)} required/>
                </label>
            </div> 

            <div className="input-box">
                <label>
                    <input type="email" name="email" placeholder='E-mail' onKeyUp={(e) => setEmail(e.target.value)} required/>
                </label>
            </div>   

            <div className="input-box">
                <label>
                    <input type="tel" name="tel" placeholder='Telefone' onKeyUp={(e) => setTel(e.target.value)} required/>
                </label>
            </div>

            <div className="input-box">
                <label>
                    <input type="password" name="password" placeholder='Senha' onKeyUp={(e) => setPassword(e.target.value)} required/>
                </label>
            </div>    

            <div className="input-box">
                <label>
                    <input type="password" name="password-confirm" placeholder='Confirme sua senha' onKeyUp={(e) => setPasswordConfirm(e.target.value)} required/>
                </label>
            </div>

            <div className="login-button">
                <Button type="submit" styles={buttonStyle}>{validating ? 'Verificando...' : 'Cadastre-se'}</Button>
            </div>

        </form>      
    )

}

export default Register