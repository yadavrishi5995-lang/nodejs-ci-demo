const { test } = require("node:test");
const assert = require("node:assert");

const { getMessage } = require("../src/index");

test("Application should return the welcome message", () => {
    assert.strictEqual(
        getMessage(),
        "Welcome to Docker and ECS Fargate"
    );
});
