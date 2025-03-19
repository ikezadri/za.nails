import Type from "./type.js";

type Booking = {
	id: number;
	date_time: Date;
	type_id: number;
	type: Type;
};

export default Booking;
