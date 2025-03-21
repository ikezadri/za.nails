import type { Dispatch, SetStateAction } from "react";
import type User from "../user";

// typer les données (par exmple : les états) contenues dans le contexte
type UserProviderContext = {
    user : User;
    setUser: Dispatch<SetStateAction<User>>;
};

export default UserProviderContext;