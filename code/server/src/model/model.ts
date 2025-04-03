import type Type from "./type.js";

type Model = {
    id: number;
    name: string;
    image: string;
    type_ids: string;
    type: Type[];
};

export default Model;