import {PropsWithChildren, createContext, useCallback, useContext, useMemo, useState } from 'react';
import {User} from "../types/User";

interface AuthContextType{
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({children}: PropsWithChildren) => {
    const [user, setUser] = useState<User | null>(null);
    const login = useCallback((user: User) => {
        setUser(user);
    },[]);
    const logout = useCallback(() => {
        setUser(null);
    },[]);

    const authContextValue = useMemo(() => ({user, login, logout}), [user, login, logout]);

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (context === null){
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};