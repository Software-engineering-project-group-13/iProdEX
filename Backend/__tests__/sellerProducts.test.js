const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../index.js");
const dotenv = require("dotenv");

dotenv.config();

// jest.setTimeout(30000);


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


describe("/api/selleritems/find/:userId", () => {
    beforeAll(async () => {
        await connect()
    });
    afterAll(async () => {
        await mongoose.connection.close();
    });
    test("should get the item the user 'admin' is selling.", async () => {
        const res = await request(app).get("/api/selleritems/find/643840d6976564b736ed147e");
        expect(res.status).toBe(201);
    });
});



// describe("/api/favorites/delete/:id/", () => {
//     beforeAll(async () => {
//         await connect()
//     });
//     afterAll(async () => {
//         await mongoose.connection.close();
//     });
//     test("should remove favorite", async () => {
//         const res = await request(app).post("/api/favorites/delete/6438e9348a6bd1336f3b6c8c");
//         expect(res.status).toBe(201);
//     });

// });
