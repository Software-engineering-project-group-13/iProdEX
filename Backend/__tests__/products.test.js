const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../index.js");
const dotenv = require("dotenv");

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


describe("/api/products/find/:id", () => {
    beforeAll(async () => {
        await connect()
    });
    afterAll(async () => {
        await mongoose.connection.close();
    });
    test("should get product details of Reebok cricket bat", async () => {
        const res = await request(app).get("/api/products/find/64384b073830ff2c901c722b");
        expect(res.status).toBe(200);
    });
    test("title of the product should be Cricket bat", async () => {
        const res = await request(app).get("/api/products/find/64384b073830ff2c901c722b");
        expect(res.body.title).toBe("Cricket bat");
        // expect(res.body.email).toBe("cs20btech11033@iith.ac.in");
    });
    test("Company of the product should be reebok", async () => {
        const res = await request(app).get("/api/products/find/64384b073830ff2c901c722b");
        expect(res.body.company).toBe("REEBOK");
    });
    test("size of the product should be 1.6ft", async () => {
        const res = await request(app).get("/api/products/find/64384b073830ff2c901c722b");
        expect(res.body.size).toBe("1.6ft");
    });
    test("color of the product should be white and black", async () => {
        const res = await request(app).get("/api/products/find/64384b073830ff2c901c722b");
        expect(res.body.color).toBe("White and black");
    });
    test("age of the product should be 1 year", async () => {
        const res = await request(app).get("/api/products/find/64384b073830ff2c901c722b");
        expect(res.body.age).toBe("1 Years");
    });
    test("description of the product should be It is a REEBOK bat weighs 1.5kg provided with a grip. It is well knocked and doesn't have a single crack. It is provided with getting.", async () => {
        const res = await request(app).get("/api/products/find/64384b073830ff2c901c722b");
        // expect(res.body.username).toBe("sahilM");
        expect(res.body.desc).toBe("It is a REEBOK bat weighs 1.5kg provided with a grip. It is well knocked and doesn't have a single crack. It is provided with getting.");
    });
    test("price of the product should be 700", async () => {
        const res = await request(app).get("/api/products/find/64384b073830ff2c901c722b");
        // expect(res.body.username).toBe("sahilM");
        expect(res.body.price).toBe(700);
    });

});

// describe("/api/products/:id", () => {
//     beforeAll(async () => {
//         await connect()
//     });
//     afterAll(async () => {
//         await mongoose.connection.close();
//     });
//     test("should delete product details of speaker", async () => {
//         const res = await request(app).delete("/api/products/644f4a0758695add289a055d");
//         expect(res.status).toBe(200);
//     });

// });

describe("/api/products/", () => {
    beforeAll(async () => {
        await connect()
    });
    afterAll(async () => {
        await mongoose.connection.close();
    });
    test("should register a product", async () => {
        newProduct = {
            title: "speaker",
            company: "Marshall",
            categories: "Electronics",
            size: "4 in",
            color: "black",
            age: "1 year",
            desc: "New speaker",
            img: "",
            price: 7000
        }
        const res = await request(app).post("/api/products/").send(newProduct);
        expect(res.status).toBe(200);
        // expect(res.body).toHaveProperty("message","user already exists");
    });
});