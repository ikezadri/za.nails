import type User from "./user.js";

type Commentary = {
    id: number;
    title: string;
    description: string;
    date: Date;
    user_id: number;
    user: User;
};

export default Commentary;