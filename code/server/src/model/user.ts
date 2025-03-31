import type Role from "./role.js";

type User = {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    phone_number: number;
    password: string;
    role_id: number;
    role: Role;
    // partie aléatoire de la clé de décryptage
    key: string;
};

export default User;
