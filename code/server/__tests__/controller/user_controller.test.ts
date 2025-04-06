import supertest from "supertest";
import { describe, it, expect } from "vitest";
import Server from "../../src/core/server";
import jwt from "jsonwebtoken";

describe ('user controller tests suite', () => {
    it("should reply with 200 code status", async () => {
		// arrange
		const expected = 200;
		// act
		const sut = await supertest(new Server().create()).get("/user");
		const actual = sut.status;
		// console.log(actual);

		// assert
		expect(actual).toBe(expected);
	});

    it("should get one user", async () => {
		// arrange
		const expected = 2;
		// act
		const sut = await supertest(new Server().create()).get("/user");
		const actual = sut.body.data;
		console.log(actual);

		// assert
		// expect(actual).toBe(expected);
	});
});