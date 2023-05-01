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





describe("/api/favorites/find/:userId", () => {
    beforeAll(async () => {
        await connect()
    });
    afterAll(async () => {
        await mongoose.connection.close();
    });
    test("should get favorites of the user 'admin'", async () => {
        const res = await request(app).get("/api/favorites/find/643840d6976564b736ed147e");
        expect(res.status).toBe(201);
    });
    test("gets the first favorite of the user 'admin'", async () => {
        const res = await request(app).get("/api/favorites/find/643840d6976564b736ed147e");
        expect(res.body.products[0]).toBe("644d280016a45d421688f660")
    });
    test("gets the second favorite of the user 'admin'", async () => {
        const res = await request(app).get("/api/favorites/find/643840d6976564b736ed147e");
        expect(res.body.products[1]).toBe("643d1a5932070e42530692db")
    });
    test("gets the third favorite of the user 'admin'", async () => {
        const res = await request(app).get("/api/favorites/find/643840d6976564b736ed147e");
        expect(res.body.products[2]).toBe("64384b073830ff2c901c722b")
    });
    test("gets the fourth favorite of the user 'admin'", async () => {
        const res = await request(app).get("/api/favorites/find/643840d6976564b736ed147e");
        expect(res.body.products[3]).toBe("6438ea0d8a6bd1336f3b6c93")
    });
});



describe("/api/favorites/:id/", () => {
    beforeAll(async () => {
        await connect()
    });
    afterAll(async () => {
        await mongoose.connection.close();
    });
    test("should add a favorite to the user", async () => {
        newUserFavorites = {
            userId: "6438e9348a6bd1336f3b6c8c",
            products: ["64384b073830ff2c901c722b"]
        }
        const res = await request(app).post("/api/favorites/6438e9348a6bd1336f3b6c8c/").send(newUserFavorites);
        expect(res.status).toBe(201);
        // expect(res.body).toHaveProperty("message","user already exists");
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
