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
      });
    });
  });
});
