/*
    describe = permet de regrouper des tests.
    it = permet d'écrire un test.
    expect = permet de créer une assertion (affirmation).
*/
import { describe, it, expect } from "vitest";

// créer une suite de tests
describe("test suite", () => {
	// créer un test
	it("my addition works", () => {
		expect(1 + 1).toBe(2);
		expect(1 + 1).not.toBe(3);
	});
});
