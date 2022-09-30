import { useEffect, useState } from "react";
import Button from "../../../Components/Button";

import useFetch from "../../../hooks/useFetch";

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
    
    const { data: cpfExists, isFetching: searchCpf } = useFetch(cpf ? `customer_cpf/${cpf}` : null);
    const { data: emailExists, isFetching: searchEmail } = useFetch(email ? `customer_email/${email}` : null);

    const [registerData, setRegisterData] = useState();

    const postNewUser = async () => {
        const api = process.env.REACT_APP_API_URL.replaceAll('"', '') + 'customer';

        const options = {
            method: 'POST',
            body: JSON.stringify(registerData),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            })
        }

        await fetch(api, options)
        .then(() => {
            props.setloginComponent(true);
        })
        .catch(err => {
            console.log(err);
        });
    }

    useEffect(() => {
        setWrongEntry(false);
    }, [email, password]);

    const cadastro = async (e) => {
        e.preventDefault();

        setWrongEntry(false);

        setRegisterData({
            name: name,
            cpf: cpf,
            birth: birth,
            email: email,
            tel: tel,
            password: password
        });
        
        if (password !== passwordConfirm || cpfExists !== null || emailExists !== null ){
            setButtonStyle({backgroundColor: "#CE5B49", color: "#fefefe"});
            setTimeout(() => {setButtonStyle()}, 1500);
            setWrongEntry(true);
        } else {
            postNewUser();
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

            <div className="input-box">
                <label>
                    <input type="text" name="nome" placeholder='Nome completo' onKeyUp={(e) => setName(e.target.value)} required/>
                </label>
            </div>  

            <div className="input-box">
                <label>
                    <p style={{color: '#CE5B49', fontSize:'10px', fontWeight: 'bold'}}>{(cpfExists && wrongEntry) ? 'CPF já cadastrado no sistema!' : null}</p>
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
                    <p style={{color: '#CE5B49', fontSize:'10px', fontWeight: 'bold'}}>{(emailExists && wrongEntry) ? 'E-mail já cadastrado no sistema!' : null}</p>
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
                    <p style={{color: '#CE5B49', fontSize:'10px', fontWeight: 'bold'}}>{(password !== passwordConfirm && wrongEntry) ? 'Senhas diferentes!' : null}</p>
                    <input type="password" name="password-confirm" placeholder='Confirme sua senha' onKeyUp={(e) => setPasswordConfirm(e.target.value)} required/>
                </label>
            </div>

            <div className="login-button">
                <Button type="submit" styles={buttonStyle}>{searchCpf || searchEmail ? 'Verificando...' : 'Cadastre-se'}</Button>
            </div>

        </form>      
    )

}

export default Register