/* eslint-env mocha */

import request from 'supertest';
import app from '../app';

describe('homepage', () => {
  it('welcomes the user', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Welcome to the meal booking app');
    done();
  });
});
