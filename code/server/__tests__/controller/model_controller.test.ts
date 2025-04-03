import supertest from "supertest";
import { describe, it, expect } from "vitest";
import Server from "../../src/core/server";
import jwt from "jsonwebtoken";

describe("model controller tests suite", () => {
	const admin = {
		id: 1,
		firstname: "Inès",
		lastname: "Kezadri",
		email: "inxsdk@gmail.com",
		phone_number: "0635784195",
		password:
			"16bd0a014643aa777a5ff40822ce8d459933c34ba83def8e4759bd78373b36fcaXXMhkhHuAWAhlS58vymsA==7ec218d4e167360344375083815e211880478089079612a408ee095f2024bccc",
		role_id: 1,
		role: {
			id: 1,
			name: "admin",
		},
		key: "f236cdd713da40a1fcfef5267c6686b4",
	};

	const token = jwt.sign({ user: admin }, process.env.JWT_KEY as string, {
		expiresIn: 30,
	});

	const values = {
		name: "mohammed",
		image: "costume-bordeaux.jpg",
		type_ids: "1,2",
	};

	it("should reply with 200 code status", async () => {
		// arrange
		const expected = 200;
		// act
		const sut = await supertest(new Server().create()).get("/model");
		const actual = sut.status;
		// console.log(actual);

		// assert
		expect(actual).toBe(expected);
	});

	it("should get one model", async () => {
		// arrange
		const expected = 1;
		// act
		const sut = await supertest(new Server().create()).get("/model");
		const actual = sut.body.data;
		// console.log(actual);

		// assert
		// expect(actual).toBe(expected);
	});

	it("should create a model", async () => {
		// arrange
		const expected = 200;
		// act
		/* 
			si le formulaire possède un fichier : utiliser les méthodes field et attach 
			si le formulaire ne possède pas de fichier : utiliser la méthode send
		*/
		const sut = await supertest(new Server().create())
			.post("/model")
			.auth(token, { type: "bearer" })
			// .send(values) // sans fichier
			.field("name", values.name)
			.attach("image", `${process.env.ASSETS_DIR}/img/${values.image}`)	
			.field("type_ids", values.type_ids)
		;
		const actual = sut.status;
console.log(sut);

		// assert
		expect(actual).toBe(expected);
	});
});
