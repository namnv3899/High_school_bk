import React, {useState, createContext} from 'react';

const UserContext = createContext();

function UserProvider({children}){
    const [user, setUser] = useState({
        username: "",
        password: "",
        role: ""
    });
    const value = {
        user,
        setUser
    }
    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}