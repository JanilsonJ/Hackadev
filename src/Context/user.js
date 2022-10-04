import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [isLoggedIn, setLoggedIn] = useState(false);

    const [user, setUser] = useState(JSON.parse(window.localStorage.getItem('userData')) || {})

    useEffect(() => {
        if (user.id)
            setLoggedIn(true)
    }, [user]) 

    const setUserData = (data) => {
        if(data.address)
            setUser({...user, ...data})
        else
            setUser(data)

        window.localStorage.setItem('userData', JSON.stringify(data)); //Armazenando dados localmente;
    }

    const login = async (data) => {
        await fetch(process.env.REACT_APP_API_URL.replaceAll('"', '') + `customer_delivery_address/${data.id}`)
        .then((response) => response.json())
        .then((address) => {data = {...data, ...address}});

        setUser(data)
        window.localStorage.setItem('userData', JSON.stringify(data)); //Armazenando dados localmente;
    }

    const logoutUser = () => {
        window.localStorage.setItem('userData', JSON.stringify({})); //Remove dados localmente;
        setLoggedIn(false);
    }

    return (
        <UserContext.Provider value={{isLoggedIn, login, setLoggedIn, setUserData, user , logoutUser}}>
            { children }
        </UserContext.Provider>
    )
}
