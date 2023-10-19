import { createContext, useState } from "react";


export const AuthContext = createContext(null); 

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null); 

    const authData = {
        user, 
    }

    return (
        <AuthContext.Provider value={authData}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;