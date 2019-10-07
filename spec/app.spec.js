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
      });
    });
  });
});
