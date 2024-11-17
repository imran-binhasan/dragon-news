import { createContext } from "react";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider value={{price:2000}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;