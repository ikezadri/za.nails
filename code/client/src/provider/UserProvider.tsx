import { createContext, useState } from "react";
import type UserProviderContext from "../model/contexte/UserProviderContext";
import type UserProviderProps from "../model/props/user_provider_props";
import type User from "../model/user";

// créer un contexte - une donnée associée à un provider
const UserContext = createContext({} as UserProviderContext);

// provider : composant qui contient un contaxte
// children représente les composants enfants du Provider
const UserProvider = ( {children}:UserProviderProps) => {
    // état stockant l'utilisateur connecté 
    const [user, setUser] = useState<User>({} as User);
	return ( <UserContext.Provider value={{ user, setUser }}>
            {children}
            </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
