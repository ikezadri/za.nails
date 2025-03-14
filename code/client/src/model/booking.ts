import type Types from "./types.js";

type Booking = {
	id: number;
	date_time: Date;
	types: Types;
	types_id: number;
};

export default Booking;
