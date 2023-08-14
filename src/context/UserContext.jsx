import React, { createContext, useState } from 'react'

export const AppUserContext = createContext(null);

const UserContext = ({ children }) => {

    const [name, setName] = useState("Contexto Global")

    return (
        <AppUserContext.Provider value={{ name, setName }}>
            {children}
        </AppUserContext.Provider>
    )
}

export default UserContext

