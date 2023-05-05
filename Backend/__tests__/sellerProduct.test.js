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
    await connect();
  });
  afterAll(async () => {
    await mongoose.connection.close();
  });
  test("should get the item the user 'satvik' is selling.", async () => {
    const res = await request(app).get(
      "/api/selleritems/find/6438e9348a6bd1336f3b6c8c"
    );
    expect(res.status).toBe(201);
  });

  test("admins product 1", async () => {
    const res = await request(app).get(
      "/api/selleritems/find/6438e9348a6bd1336f3b6c8c"
    );
    expect(res.body.products[0]).toBe("644f576308c25f0854bc51eb");
  });

  test("admins product 2", async () => {
    const res = await request(app).get(
      "/api/selleritems/find/6438e9348a6bd1336f3b6c8c"
    );
    expect(res.body.products[1]).toBe("643d1a5932070e42530692db");
  });

  test("admins product 3", async () => {
    const res = await request(app).get(
      "/api/selleritems/find/6438e9348a6bd1336f3b6c8c"
    );
    expect(res.body.products[2]).toBe("643d1b9b32070e42530692dc");
  });

  test("admins product 4", async () => {
    const res = await request(app).get(
      "/api/selleritems/find/6438e9348a6bd1336f3b6c8c"
    );
    expect(res.body.products[3]).toBe("643d1d1432070e42530692dd");
  });
});

// describe("/api/favorites/delete/:id/", () => {
//   beforeAll(async () => {
//     await connect();
//   });
//   afterAll(async () => {
//     await mongoose.connection.close();
//   });
//   test("should remove favorite", async () => {
//     const res = await request(app).post(
//       "/api/favorites/delete/6438e9348a6bd1336f3b6c8c"
//     );
//     expect(res.status).toBe(201);
//   });
// });
