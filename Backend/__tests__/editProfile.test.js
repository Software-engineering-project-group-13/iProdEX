const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../index.js");
const dotenv = require("dotenv");
const CryptoJs = require("crypto-js");

dotenv.config();

mongoose.set("strictQuery", false);

const mongoDB = process.env.MONGO_URL;
async function connect() {
  try {
    await mongoose.connect(mongoDB);
    console.log("Connected with Mongodb");
  } catch (error) {
    console.log(error.message);
  }
}

describe("/api/users/:id", () => {
  beforeAll(async () => {
    await connect();
  });
  afterAll(async () => {
    await mongoose.connection.close();
  });
  test("should delete user details of user11", async () => {
    const res = await request(app).delete(
      "/api/users/644d1c37371ca5be37bc926b"
    );
    expect(res.status).toBe(200);
  });
});

describe("/auth/api/register/", () => {
  beforeAll(async () => {
    await connect();
  });
  afterAll(async () => {
    await mongoose.connection.close();
  });
  test("registering an already registered user should fail", async () => {
    newUser = {
      firstname: "Msahil",
      lastname: "Muttareddy",
      username: "sahilM",
      email: "cs20btech11033@iith.ac.in",
      phonenumber: 9999999999,
      password: "password",
      confirmpassword: "password",
      isAdmin: false,
    };
    const res = await request(app).post("/api/auth/register/").send(newUser);
    expect(res.status).toBe(500);
    // expect(res.body).toHaveProperty("message","user already exists");
  });
});

describe("/auth/api/register/", () => {
  beforeAll(async () => {
    await connect();
  });
  afterAll(async () => {
    await mongoose.connection.close();
  });
  test("registering a new user", async () => {
    newUser = {
      firstname: "user21",
      lastname: "21",
      username: "user21",
      email: "user21@iith.ac.in",
      phonenumber: 9999999999,
      password: "password",
      confirmpassword: "password",
      isAdmin: false,
    };
    const res = await request(app).post("/api/auth/register/").send(newUser);
    expect(res.status).toBe(201);
    // expect(res.body).toHaveProperty("message","user already exists");
  });
});
