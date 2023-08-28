// test/controllers/courses.test.js
const request = require("supertest");
const app = require("../app"); // Replace with the actual path to your Express app
const { sequelize } = require("../your-sequelize-setup"); // Replace with your Sequelize setup

beforeAll(async () => {
  // Add any setup code here, e.g., database migrations or seeding
});

afterAll(async () => {
  // Add any cleanup code here, e.g., closing the database connection
  await sequelize.close();
});

describe("GET /courses", () => {
  it('should return a list of courses with title "math" sorted in ascending order of titles', async () => {
    const response = await request(app)
      .get("/courses")
      .query({ title: "math", sort: "title" });

    expect(response.status).toBe(200);
    expect(response.body).toEqual([
      // Define the expected response data here based on your test data
    ]);
  });

  it("should return a course with id 2 sorted in descending order of IDs", async () => {
    const response = await request(app)
      .get("/courses")
      .query({ id: 2, sort: "id_desc" });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      // Define the expected response data here based on your test data
    });
  });

  it("should return courses with an empty desc (description) sorted in descending order of descriptions", async () => {
    const response = await request(app)
      .get("/courses")
      .query({ desc: "", sort: "desc_desc" });

    expect(response.status).toBe(200);
    expect(response.body).toEqual([
      // Define the expected response data here based on your test data
    ]);
  });
});
