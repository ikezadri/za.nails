import type Roles from "./roles.js";

type User = {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    phonenumber: number;
    password: string;
    roles_id: number;
    roles: Roles;
};

export default User;
