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

describe("/api/users/find/:id", () => {
    beforeAll(async () => {
        await connect()
    });
    afterAll(async () => {
        await mongoose.connection.close();
    });
    test("should get user details of Sahil", async () => {
        const res = await request(app).get("/api/users/find/644f37118eda73a2b9214f7e");
        expect(res.status).toBe(200);
    });
    test("username of the user should be sahilM", async () => {
        const res = await request(app).get("/api/users/find/644f37118eda73a2b9214f7e");
        expect(res.body.username).toBe("sahilM");
        // expect(res.body.email).toBe("cs20btech11033@iith.ac.in");
    });
    test("email of the user should be cs20btech11033@iith.ac.in", async () => {
        const res = await request(app).get("/api/users/find/644f37118eda73a2b9214f7e");
        // expect(res.body.username).toBe("sahilM");
        expect(res.body.email).toBe("cs20btech11033@iith.ac.in");
    });
    test("firstname of the user should be Msahil", async () => {
        const res = await request(app).get("/api/users/find/644f37118eda73a2b9214f7e");
        // expect(res.body.username).toBe("sahilM");
        expect(res.body.firstname).toBe("Msahil");
    });
    test("lastname of the user should be Muttareddy", async () => {
        const res = await request(app).get("/api/users/find/644f37118eda73a2b9214f7e");
        // expect(res.body.username).toBe("sahilM");
        expect(res.body.lastname).toBe("Muttareddy");
    });
    test("phonenumber of the user should be 9999999999", async () => {
        const res = await request(app).get("/api/users/find/644f37118eda73a2b9214f7e");
        // expect(res.body.username).toBe("sahilM");
        expect(res.body.phonenumber).toBe(9999999999);
    });
    test("the user should not be an admin", async () => {
        const res = await request(app).get("/api/users/find/644f37118eda73a2b9214f7e");
        // expect(res.body.username).toBe("sahilM");
        expect(res.body.isAdmin).toBe(false);
    });

});




