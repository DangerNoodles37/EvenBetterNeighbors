const request = require("supertest");
const server = 'http://localhost:3000';



describe('Requests to /createUser should work', () => {
  test('POST /createUser', (done) => {
    request(server)
    .post("/createUser")
    .send({
      firstName: 'Andrew',
      lastName: 'Hogan',
      email: 'lalala',
      password: 'camille',
      zipCode: '123'
    })
    .expect(302)
    .end((err, res) => {
      if (err) return done(err);
      return done();
    })
  });
});

// const userSchema = new mongoose.Schema({
//   firstName: { type: String, required: true },
//   lastName: { type: String, required: true },
//   email: { type: String, required: true },
//   password: { type: String, required: true },
//   zipCode: { type: String },
// });


xdescribe('Requests to /test should work', () => {
  test('Get /test', (done) => {
    request(server)
    .get("/test")
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
      return done();
    })
  });
});

describe('POST /createUser', () => {
  it('responds with 302 status and redirects to /LoginPage', async () => {
    const response = await request(server)
      .post('/createUser')
      .send({
        username: 'testuser',
        password: 'testpassword'

      })
      .expect('Location', '/LoginPage')
      .expect(302);
  });
});

xdescribe('DELETE /delete', () => {
  it('should return a status code of 200', async () => {
    const response = await request(server)
      .delete('/delete')
      // .send({
      //   userID: 'testid'
      // })
      // .expect('Content-Type', /application\/json/)
      .expect(200);
      // expect(response.body).toEqual({});
  });
});

describe('PATCH /update', () => {
  it('should successfully update existing user', () => {

  })
})




// const mockRequest = {
//   method: 'GET',
//   url: '/',
// };

// const mockResponse = {};

// logger(mockRequest, mockResponse, () => {});

// // Assert that the request and response objects were logged to the console
// expect(console.log).toHaveBeenCalledWith(mockRequest);
// expect(console.log).toHaveBeenCalledWith(mockResponse);