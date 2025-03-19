import Role from "./role.js";

type User = {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    phone_number: number;
    password: string;
    role_id: number;
    role: Role;
};

export default User;
