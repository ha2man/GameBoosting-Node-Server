const basicSetup = require('./helpers/basicSetup')
const User = require('../models/User');
const usersController = require("../controllers/user-controller");
const mocks = require('node-mocks-http');
const {createAdminUser} = require('../helpers/createAdmin');

basicSetup();

describe('usersController.login() tests', () => {
  test('Valid credentials for login. Expect statusCode toBe 200, expect correct cookie values with usertype = admin', async () => {
    await createAdminUser();
    const req = {
      body: { username: 'admin', password: "123456" }
    };
    const res = mocks.createResponse();
    await usersController.login(req, res);
    expect(res.statusCode).toBe(200);
    expect(res.cookies.username.value).toBe("admin");
    expect(res.cookies.usertype.value).toBe("admin");
  });

  test('Invalid credentials for login. Expect statusCode toBe 401, expect cookies values toBeUndefined', async () => {
    const req = {
      body: { username: 'admin1', password: "123456" }
    };
    const res = mocks.createResponse();
    await usersController.login(req, res);
    expect(res.statusCode).toBe(401);
    expect(res.cookies.username).toBeUndefined();
  });
});

describe('usersController.authenticate() tests', () => {
  test('First login with correct credentials and then send that jwt token for authentication. Expect statusCode toBe 200', async () => {
    const req = {
      body: { username: 'admin', password: "123456" }
    };
    const res = mocks.createResponse();
    await usersController.login(req, res);
    const jwt = (await res.json()).cookies.jwt.value;
    
    // request for autheticate with the jwt received from login cookies
    const req2 = {
      cookies: { username: 'admin', usertype: 'user', jwt }
    };
    const res2 = mocks.createResponse();
    await usersController.authenticate(req2, res2);
    expect(res2.statusCode).toBe(200);
  });

  test('Send an invalid jwt token for Invalid credentials for login. Expect statusCode toBe 401, expect cookies values toBeUndefined', async () => {
    const req = {
      cookies: { username: 'admin', usertype: 'user', jwt: 'sfgfgdfgdf' }
    };
    const res = mocks.createResponse();
    await usersController.authenticate(req, res);
    expect(res.statusCode).toBe(401);
    expect(res.cookies.username).toBeUndefined();
  });
});

describe('usersController.registerUser() tests', () => {
  test('Sending fresh credentials for registering user. Expect statusCode toBe 200', async () => {
    const req = {
      body: {
        username: 'adminnew',
        password: "123456",
        email: "email@gmail.com",
        name: "Rahul"
      }
    };
    const res = mocks.createResponse();
    await usersController.registerUser(req, res);
    expect(res.statusCode).toBe(200);
  });

  test('Checking the user created with username = adminnew in above test was registered as usertype = user', async () => {
    const req = {
      body: { username: 'adminnew', password: "123456" }
    };
    const res = mocks.createResponse();
    await usersController.login(req, res);
    expect(res.statusCode).toBe(200);
    expect(res.cookies.username.value).toBe("adminnew");
    expect(res.cookies.usertype.value).toBe("user");
  });

  test('Trying to register another user with same username. Expect statusCode toBe 400', async () => {
    const req = {
      body: {
        username: 'adminnew',
        password: "123456",
        email: "email@gmail.com",
        name: "Rahul"
      }
    };
    const res = mocks.createResponse();
    await usersController.registerUser(req, res);
    expect(res.statusCode).toBe(400);
  });
});

describe('usersController.deleteUser() tests', () => {
  test('First we login using the credentials to get the userid and then try to to delete the previously registered user with username = adminnew being a non-admin. Expect statusCode toBe 400', async () => {
    const req = {
      body: { username: 'adminnew', password: "123456" }
    };
    const res = mocks.createResponse();
    await usersController.login(req, res);
    const id = (await res.json()).cookies.userid.value;

    // request for delete user with the id received from login cookies
    const req2 = {
      params: { id },
      cookies: { username: "adminnew", usertype: "user" }
    };
    const res2 = mocks.createResponse();
    await usersController.deleteUser(req2, res2);
    expect(res2.statusCode).toBe(400);
  });

  test('First we login using the credentials to get the userid and then try to to delete the previously registered user with username = adminnew being an admin. Expect statusCode toBe 200', async () => {
    const req = {
      body: { username: 'adminnew', password: "123456" }
    };
    const res = mocks.createResponse();
    await usersController.login(req, res);
    const id = (await res.json()).cookies.userid.value;

    // request for delete user with the id received from login cookies
    const req2 = {
      params: { id },
      cookies: { username: "adminnew", usertype: "admin" }
    };
    const res2 = mocks.createResponse();
    await usersController.deleteUser(req2, res2);
    expect(res2.statusCode).toBe(200);
  });
});

describe('usersController.getAllUsers() tests', () => {
  test('Trying to fetch all users without sending the usertype = admin in the cookies. Expect statusCode toBe 400', async () => {
    const req = {
      cookies: { username: "adminnew" }
    };
    const res = mocks.createResponse();
    await usersController.getAllUsers(req, res);
    expect(res.statusCode).toBe(400);
  });

  test('Trying to fetch all users sending the usertype = admin in the cookies. Expect statusCode toBe 200', async () => {
    const req = {
      cookies: { username: "adminnew", usertype: "admin" }
    };
    const res = mocks.createResponse();
    await usersController.getAllUsers(req, res);
    expect(res.statusCode).toBe(200);
  });
});
