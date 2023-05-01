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
        const res = await request(app).get("/api/selleritems/find/644f54fd08c25f0854bc51e8");
        expect(res.status).toBe(201);
    });

    test("admins product 1", async () => {
        const res = await request(app).get("/api/selleritems/find/643840d6976564b736ed147e");
        expect(res.body.products[0]).toBe("644f54fc08c25f0854bc51e5");
    });

    test("admins product 2", async () => {
        const res = await request(app).get("/api/selleritems/find/643840d6976564b736ed147e");
        expect(res.body.products[1]).toBe("64384b073830ff2c901c722b");
    });

    test("admins product 3", async () => {
        const res = await request(app).get("/api/selleritems/find/643840d6976564b736ed147e");
        expect(res.body.products[2]).toBe("6438ea0d8a6bd1336f3b6c93");
    });

    test("admins product 3", async () => {
        const res = await request(app).get("/api/selleritems/find/643840d6976564b736ed147e");
        expect(res.body.products[3]).toBe("643d166b93e14ddb5f83a531");
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
