/* eslint-env mocha */

import request from "supertest";
import * as chai from "chai";
import app from "../app";

let assert = chai.assert;
let expect = chai.expect();

describe("Test API endpoints", () => {
  describe("Test meals endpoints", () => {
    it("Should get all meals on GET /api/v1/meals", done => {
      request(app)
        .get("/api/v1/meals")
        .expect("Content-Type", /json/)
        .expect(200, done);
    });

    it("Should add a meal option POST /api/v1/meals", done => {
      request(app)
        .post("/api/v1/meals")
        .send({
          name: "Bacon",
          description: "Bacon ipsum dolor amet ribeye.",
          price: "N400"
        })
        .expect("Content-Type", /json/)
        .expect(200, done);
    });

    it("Update a meal option on PUT /api/v1/meals/:id", done => {
      request(app)
        .put("/api/v1/meals/1")
        .send({
          name: "Bacon",
          description: "Bacon ipsum dolor amet ribeye.",
          price: "N400"
        })
        .expect(200, done);
    });

    it("Should delete a meal on DELETE /api/v1/meals/:id", done => {
      request(app)
        .delete("/api/v1/meals/1")
        .expect(200, done);
    });
  });

  describe("Test menu endpoints", () => {
    it("Should set up menu for the day on POST /api/v1/menu", done => {
      request(app)
        .post("/api/v1/menu")
        .send({
          name: "Bacon"
        })
        .expect("Content-Type", /json/)
        .expect(200, done);
    });

    it("Should get menu for the day on GET /api/v1/menu", done => {
      request(app)
        .get("/api/v1/menu")
        .expect("Content-Type", /json/)
        .expect(200, done);
    });
  });

  describe("Test order endpoints", () => {
    it("Should get all orders  GET /api/v1/order", done => {
      request(app)
        .get("/api/v1/order")
        .expect("Content-Type", /json/)
        .expect(200, done);
    });

    it("Should modify an order on  PUT /api/v1/order/id", done => {
      request(app)
        .put("/api/v1/order/1")
        .send({
          mealName: "Yam"
        })
        .expect(200, done);
    });

    it("Should place an order for meal on POST /api/v1/order", done => {
      request(app)
        .get("/api/v1/order")
        .expect("Content-Type", /json/)
        .expect(200, done);
    });
  });
});
