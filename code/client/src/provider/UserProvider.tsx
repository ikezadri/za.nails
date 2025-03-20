import { createContext } from "react";
import type UserProviderContext from "../model/contexte/UserProviderContext";
import type UserProviderProps from "../model/props/user_provider_props";

// créer un contexte - une donnée associée à un provider
const UserContext = createContext({} as UserProviderContext);

// provider : composant qui contient un contaxte
// children représente les composants enfants du Provider
const UserProvider = ( {children}:UserProviderProps) => {
	return ( <UserContext.Provider value={{ text: "TEST" }}>
            {children}
            </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
