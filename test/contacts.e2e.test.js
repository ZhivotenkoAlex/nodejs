const request = require('supertest')
const jwt = require('jsonwebtoken')
const faker = require('faker');
require('dotenv').config()
const { contacts, newContact, User, users, newUser } = require('../model/__mocks__/data')
const app = require('../app')

const SECRET_KEY = process.env.JWT_SECRET;
const issueToken = (payload, secret) => jwt.sign(payload, secret)
const token = issueToken({ id: User._id }, SECRET_KEY)
User.token = token

jest.mock('../model/contacts.js')
jest.mock('../model/users.js')

describe('Testing the route api/contacts', () => {
    let idNewContact
    describe('should handle get request', () => {
        it('should return 200 status for get all contacts', async (done) => {
            const res = await request(app)
                .get('/api/contacts')
                .set('Authorization', `Bearer ${token}`)

            expect(res.status).toEqual(200)
            expect(res.body).toBeDefined()
            expect(res.body.data.contacts).toBeInstanceOf(Array)
            done()
        })
        it('should return 200 status by id', async (done) => {
            const contact = contacts[0]
            const res = await request(app)
                .get(`/api/contacts/${contact._id}`)
                .set('Authorization', `Bearer ${token}`)

            expect(res.status).toEqual(200)
            expect(res.body).toBeDefined()
            expect(res.body.data.contact).toHaveProperty('_id')
            expect(res.body.data.contact._id).toBe(contact._id)
            done()
        })
        it('should return 404 status by wrong id', async (done) => {
            const wrongId = 12345
            const res = await request(app)
                .get(`/api/contacts/${wrongId}`)
                .set('Authorization', `Bearer ${token}`)

            expect(res.status).toEqual(404)
            expect(res.body).toBeDefined()
            done()
        })
    })
    // describe('should handle post request', () => {
    //     it('should return 201 status create contact', async (done) => {
    //         const res = await request(app)
    //             .post('/api/contacts')
    //             .set('Authorization', `Bearer ${token}`)
    //             .send(newContact)
    //             .set('Accept', 'application/json')
             
    //         expect(res.status).toEqual(201)
    //         expect(res.body).toBeDefined()
    //         idNewContact = res.body.data.contact._id
    //         done()
    //     })
    //     it('should return 400 status for wrong field', async (done) => {
    //         const res = await request(app)
    //             .post('/api/contacts')
    //             .set('Authorization', `Bearer ${token}`)
    //             .send({ ...newContact, test:"test"})
    //             .set('Accept', 'application/json')
             
    //         expect(res.status).toEqual(400)
    //         expect(res.body).toBeDefined()
    //         idNewContact = res.body.data.contact._id
    //         done()
    //     })
    //     it.skip('should return 400 status without required field name', async (done) => {
    //         const res = await request(app)
    //             .post('/api/contacts')
    //             .set('Authorization', `Bearer ${token}`)
    //             .send({ name:"bob", phone:'0503858784'})
    //             .set('Accept', 'application/json')
             
    //         expect(res.status).toEqual(400)
    //         expect(res.body).toBeDefined()
    //         idNewContact = res.body.data.contact._id
    //         done()
    //     })
                                                                                     
    // })
      describe('Testing create new contact', () => {
    it.skip('Add contact success should return 201 status', async done => {
      const res = await request(app)
        .post('/api/contacts')
        .set('Authorization', `Bearer ${token}`)
        .send(newContact)
        .set('Accept', 'application/json');

      expect(res.status).toEqual(201);
      expect(res.body).toBeDefined();
      idNewContact = res.body.data.contact._id;
      done();
    });

    it.skip('Wrong field should return 400 status', async done => {
      const res = await request(app)
        .post('/api/contacts')
        .set('Authorization', `Bearer ${token}`)
        .send({ ...newContact, test: 1 })
        .set('Accept', 'application/json');

      expect(res.status).toEqual(400);
      expect(res.body).toBeDefined();
      done();
    });

    it.skip('Should return 400 status without required field name', async done => {
      const res = await request(app)
        .post('/api/contacts')
        .set('Authorization', `Bearer ${token}`)
        .send({ ...newContact, test: 1 })
        .set('Accept', 'application/json');

      expect(res.status).toEqual(400);
      expect(res.body).toBeDefined();
      done();
    });

    it.skip('Unauthorized error should return 401 status', async done => {
      const res = await request(app)
        .post('/api/contacts')
        .set('Authorization', `Bearer ${123}`)
        .send(newContact)
        .set('Accept', 'application/json');

      expect(res.status).toEqual(401);
      expect(res.body).toBeDefined();
      done();
    });
  });
    describe('should handle patch request', () => {
        it.skip('Update contact success should return 200 status', async done => {
      const res = await request(app)
        .patch(`/api/contacts/${idNewContact}`)
        .set('Authorization', `Bearer ${token}`)
        .send({ name: 'Alla' })
        .set('Accept', 'application/json');

      expect(res.status).toEqual(200);
      expect(res.body).toBeDefined();
      expect(res.body.data.contact.name).toBe('Alla');
      done();
    });
     })
    describe('should handle delete request', () => { })
})