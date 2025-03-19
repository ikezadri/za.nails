import Type from "./type.js";

type Model = {
    id: number;
    name: string;
    image: string;
    type_ids: string;
    types: Type[];
};

export default Model;