const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;

chai.use(chaiHttp);

const app = require("./index");

describe("Server API", function () {

  describe("GET /health", function () {
    it("should return 'API is running'", function (done) {
      chai
        .request(app)
        .get("/health")
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.text).to.equal("API is running");
          done();
        });
    });
  });
});
