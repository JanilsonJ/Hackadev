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
        data.birth = data?.birth.split('T')[0];
        
        setUser(data)

        window.localStorage.setItem('userData', JSON.stringify(data)); //Armazenando dados localmente;
    }

    const logoutUser = (data) => {
        window.localStorage.setItem('userData', JSON.stringify({})); //Remove dados localmente;

        setLoggedIn(false);
    }

    return (
        <UserContext.Provider value={{isLoggedIn, setLoggedIn, setUserData, user , logoutUser}}>
            { children }
        </UserContext.Provider>
    )
}
