const request = require("supertest");
const server = 'http://localhost:3000';



describe('Requests to /createUser should work', () => {
  test('POST /createUser', (done) => {
    request(server)
    .post("/createUser")
    .send({
      firstName: 'TESTFIRSTNAME2',
      lastName: 'TESTLASTNAME2',
      email: 'TESTEMAIL2',
      password: 'TESTPASSWORD2',
      zipCode: 'TESTZIPCODE2'
    })
    // .expect('Found. Redirecting to http://localhost:8080/loginPage')
    .expect(302)
    .expect('Location', /\/loginPage/)
    .end((err, res) => {
      if (err) return done(err);
      return done();
    })
  });
});

// merchantEmail: { type: String, required: true, unique: true },
//   merchantPassword: { type: String, required: true },
//   merchantName: { type: String, required: true },
//   typeOfMerchant: { type: String, required: true },
//   merchantAddress: { type: String },
//   merchantZipCode: { type: String },
//   description: { type: String },
//   image: {
//     type: String,
//     default: 'https://en.wiktionary.org/wiki/File:Cirila-%D0%9C-majuskla.svg',

describe('requests to createMerchant should create a merchant in the dtb', () => {
  test('POST /createMerchant', (done) => {
    request(server)
      .post('/createMerchant')
      .send({
        merchantEmail: 'testMerchantCheck',
        merchantPassword: 'testMerchantPassword',
        merchantName: 'checkCheck',
        typeOfMerchant: 'checkTypeCheck',
        merchantAddress: 'checkAddress',
        merchantZipCode: 'checkThis',
        description: 'whatitis',
        image: 'checkImage'
      })
      // .expect('Found. Redirecting to http://localhost:8080/loginPage')
      .expect(302)
      .expect('Location', /\/loginPage/)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Merchant.findOne({ merchantEmail: 'testMerchantCheck'})
          .then((merchant) => {
            expect(merchant).toBeTruthy();
            return done();
          })
          .catch((err) => {
            return done(err);
          });
        })
        .catch((err) => {
          return done(err);
      });
  });
  // db.merchants.dropIndex("businessEmail_1")


})

// 'http://localhost:8080/loginPage'

// const userSchema = new mongoose.Schema({
//   firstName: { type: String, required: true },
//   lastName: { type: String, required: true },
//   email: { type: String, required: true },
//   password: { type: String, required: true },
//   zipCode: { type: String },
// });


// xdescribe('Requests to /test should work', () => {
//   test('Get /test', (done) => {
//     request(server)
//     .get("/test")
//     .expect(200)
//     .end((err, res) => {
//       if (err) return done(err);
//       return done();
//     })
//   });
// });

//we'll come back to this
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

xdescribe('PATCH /update', () => {
  it('should successfully update the firstname field in the user schema', () => {
    const req = {
      body: {
        firstName: 'John'
      }
    };
    //res 
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    userControllers.updateUser(req,res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({});
  })

  xit('should update the lastName field in the user schema', () => {
    const req = {
      body: {
        lastName: 'Joe'
      }
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    userControllers.updateUser(req, res);
    
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({});
  });

  xit('should update the password field in the user schema', () => {
    const req = {
      body: {
        password: 'newpassword123'
      }
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    userControllers.updateUser(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({});
  });

  xit('should update the email field in the user schema', () => {
    
    const req = {
      body: {
        email: 'cam.check@example.com'
      }
    };
    
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    userControllers.updateUser(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({});
  });

  xit('should update the zipcode field in the user schema', () => {
    const req = {
      body: {
        zipcode: '90210'
      }
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    userControllers.updateUser(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({});
  });
});

xdescribe('GET /allMerchants', () => {
  it('should return a 200 status code', async () => {
    const res = await request(app).get('/allMerchants');
    expect(res.statusCode).toBe(200);
  });

  xit('should return a list of merchants in the response body', async () => {
    const res = await request(app).get('/allMerchants');
    expext(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  xit('should return the correct fields for each merchant in the response body', async () => {
    const res = await request(app).get('/allMerchants');
    //check all expected properties
    expect(res.body[0]).toHaveProperty('');
  });
});


//route testing for merchant login
xdescribe('POST /merchantLogin', () => {
  let server;
  let merchantControllersMock;

  beforeAll(() => {
    //creates a mock object for the merchantControllers module
    merchantControllersMock = {
      verifyMerchant: jest.fn()
    };

    //requires the server module, and replaces the merchantControllers module with a mock object
    server = require('../server', { 
      './merchantControllers': merchantControllersMock
    });
  });

  afterAll(() => {
    //closes the server after the tests are run
    server.close();
  });
  //'http://localhost:8080/landing'
  //checks that the response has a 200 status and the correct location 
  test('returns a 200 status and redirects to /landing on successful login', async () => {
    merchantControllersMock.verifyMerchant.mockRedirectCheck((req, res, next) => {
      next();
    });

    const response = await request(server).post('./LoginPage')

    expect(response.status).toBe(200);

    
  })
})

xdescribe('POST /userLogin', () => {
  let server;
  let userControllersMock;

  beforeAll(() => {
    //creates a mock object for the merchantControllers module
    userControllersMock = {
      verifyUser: jest.fn()
    };

    //requires the server module, and replaces the userControllers module with a mock object
    server = require('../server', { 
      './userControllers': userControllersMock
    });
  });

  afterAll(() => {
    //closes the server after the tests are run
    server.close();
  });
  //'http://localhost:8080/landing'
  //checks that the response has a 200 status and the correct location 
  test('returns a 200 status and redirects to /landing on successful login', async () => {
    userControllersMock.verifyUser.mockRedirectCheck((req, res, next) => {
      next();
    });

    const response = await request(server).post('./LoginPage')

    expect(response.status).toBe(200);
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