import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    
    const [user, setUser] = useState({
        nome: '',
        cpf: '',
        dataNascimento: '',
        email: '',
        senha: '',
    })

    const [address, setAddress] = useState({
        cep: '',
        endereço: '',
        complemento: '',
        bairro: '',
        cidade: '',
    })

    const [payment, setPayment] = useState({
        numero: '',
        nome: '',
        dataExpiracao: '',
        cvv: ''
    })

    useEffect(() => {
        // console.log(user)s
    }, [user]) // synchronous states

    const updateUserData = (elements) => {
        elements.map(e => {
            if (e.tagName === "INPUT"){
                setUser(prev => ({...prev, [e.name]: e.value}))
                setAddress(prev => ({...prev, [e.name]: e.value}))
                setPayment(prev => ({...prev, [e.name]: e.value}))
            }

            return null
        })
    }

    return (
        <UserContext.Provider value={{isLoggedIn, setLoggedIn, updateUserData, user, payment, address}}>
            { children }
        </UserContext.Provider>
    )
}
