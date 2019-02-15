/* eslint-env mocha */

import request from "supertest";
import app from "../app";
import * as chai from "chai";

let assert = chai.assert;
let expect = chai.expect();
let should = chai.should();

describe("Test API endpoints", () => {
  it("Should get a list of all meals on /api/v1/meals", done => {
    request(app)
      .get("/api/v1/meals")
      .end((err, res) => {
        res.status.should.eql(200);
        res.should.be.json;
        res.body.success.should.eql(true);
        done();
      });
  });
});
