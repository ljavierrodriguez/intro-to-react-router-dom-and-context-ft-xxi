import { createContext, useState } from "react";


export const AppContext = createContext(null);


const setAppContext = Component => {
    
    const GlobalContext = (props) => {
        const [user, setUser] = useState(null)

        return (
            <AppContext.Provider value={{ user, setUser }}>
                <Component {...props} />
            </AppContext.Provider>
        )
    }

    return GlobalContext;
}

export default setAppContext;


