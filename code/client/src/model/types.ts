import type Model from "./model.js";

type Types = {
	id: number;
	name: string;
	types: string;

	model_ids: string;
	models: Model[];
};

export default Types;