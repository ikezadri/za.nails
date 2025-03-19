import type Model from "./model.js";

type Type = {
	id: number;
	name: string;
	model_ids: string;
	models: Model[];
};

export default Type;
