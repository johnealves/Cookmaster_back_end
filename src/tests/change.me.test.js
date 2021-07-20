const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../api/app');
chai.use(chaiHttp)

describe('/POST /users', () => {
  describe('it is not possible to register without a name field', () => {
    let response;

    before(async () => {
      response = await chai.request(server)
        .post('/users')
        .send({
          password: "test123",
          email:"test@test.com"
        })
    })

    it('expect status 400', () => {
      expect(response).to.have.status(400)
    });

    it('expect that response to be a object', () => {
      expect(response.body).to.be.a('object');
    });

    it('expect that result have a message', () => {
      expect(response.body).to.have.a.property('message');
    });

    it('expect message is "Invalid entries. Try again."', () => {
      expect(response.body.message).to.equal("Invalid entries. Try again.")
    })
  })

  describe('it\'s not possible to register withou password field', () => {
    let response;

    before(async () => {
      response = await chai.request(server)
        .post('/users')
        .send({
          name: "test",
          email:"test@test.com"
        })
    })

    it('expect status 400', () => {
      expect(response).to.status(400);
    })

    it('expect that response have a object', () => {
      expect(response.body).to.be.a('object');
    })

    it('expect that body have a message', () => {
      expect(response.body).to.have.property('message');
    })

    it('expect mesasge "Invalid entries. Try again."', () => {
      expect(response.body.message).to.equal("Invalid entries. Try again.");
    })
  });

  describe('it\'s not possible to register withou email field', () => {
    let response;

    before(async () => {
      response = await chai.request(server)
        .post('/users')
        .send({
          name: "test",
          password: "test123",
        })
    })

    it('expect status 400', () => {
      expect(response).to.status(400);
    })

    it('expect that response have a object', () => {
      expect(response.body).to.be.a('object');
    })

    it('expect that body have a message', () => {
      expect(response.body).to.have.property('message');
    })

    it('expect mesasge "Invalid entries. Try again."', () => {
      expect(response.body.message).to.equal("Invalid entries. Try again.");
    })
  })
});
