import type Role from "./roles.js";

type User = {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    phone_number: string;
    password: string;
    role_id: number;
    role: Role;
};

export default User;