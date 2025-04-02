import { describe, it, expect } from "vitest";
import RegisterFormValidator from "../../src/validator/register_form_validator";

describe("register form validator tests suite", () => {
	it("should be valid", async () => {
		// arrange
		const sut = new RegisterFormValidator();
        const excepted = {
			firstname: "Inès",
			lastname: "Kezadri",
			email: "i.kezadri@gmail.com",
			phone_number: "caca",
			password: "pwd"};
		const body = {
			firstname: "Inès",
			lastname: "Kezadri",
			email: "i.kezadri@gmail.com",
			phone_number: "caca",
			password: "pwd"};

		// act
		const actual = await sut.isValid(body);
		console.log(actual);

		// assert
		expect(actual).toBeInstanceOf(Error);
	});
});
