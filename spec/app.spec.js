const { expect } = require('chai');
const request = require('supertest');
const connection = require('../db/connection');
const app = require('../app');

describe('app', () => {
  beforeEach(() => {
    return connection.seed.run();
  });
  after(() => {
    return connection.destroy();
  });
  describe('/api', () => {
    describe('/houses', () => {
      describe('/:id', () => {
        it('DELETE responds with status 204', () => {
          return request(app)
            .delete('/api/houses/5')
            .expect(204);
        });
        it('DELETE if house has references in other tables will still successfully delete', () => {
          return request(app)
            .delete('/api/houses/1')
            .expect(204);
        });
        it('DELETE returns 404 if house not found', () => {
          return request(app)
            .delete('/api/houses/7')
            .expect(404)
            .then(({ body }) => {
              expect(body.msg).to.equal('house not found');
            });
        });
        it('DELETE returns 400 if invalid house id', () => {
          return request(app)
            .delete('/api/houses/bad_id')
            .expect(400)
            .then(({ body }) => {
              expect(body.msg).to.equal('bad request');
            });
        });
      });
      describe('/', () => {
        it('GET responds with 200 and array of houses objects', () => {
          return request(app)
            .get('/api/houses')
            .expect(200)
            .then(({ body }) => {
              expect(body.houses).to.be.an('array');
              expect(body.houses).to.have.length(5);
              expect(body.houses[0]).to.contain.keys(
                'house_id',
                'house_name',
                'founder',
                'animal'
              );
            });
        });
        it('GET responds with 200 and wizard count property', () => {
          return request(app)
            .get('/api/houses')
            .expect(200)
            .then(({ body }) => {
              expect(body.houses[0]).to.be.haveOwnProperty('wizard_count');
              expect(body.houses[0].wizard_count).to.be.a('number');
            });
        });
      });
    });
  });
});
