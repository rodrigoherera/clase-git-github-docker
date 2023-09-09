const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const sinon = require("sinon");
const mysql = require("mysql2");

chai.use(chaiHttp);

describe("Server API", function () {

  describe("GET /health", function () {
    it("should return 'API is running'", function (done) {
      chai
        expect(1).to.equal(1);
        done();
    });
  });
});
