// test/courses.test.js
const request = require("supertest");
const app = require("../app");

describe("CRUD Operations   /courses", () => {
  // --------------------------Create-------------------------------
  it("should create a new course", async () => {
    const newCourse = { id: 1, title: "Arabic", desc: "Arabic descreption" };

    const response = await request(app).post("/courses/add").send(newCourse);
    expect(response.status).toBe(201);
  });
  // --------------------------List-------------------------------
  it("should return a list of courses ", async () => {
    const response = await request(app).get("/courses").expect(200);
  });

  // --------------------------update-------------------------------
  // Test for updating a course
  it("should update a course id 1", async () => {
    const updatedCourse = {
      title: "Updated Mathematics",
      desc: "An updated course on mathematics",
    };

    const response = await request(app)
      .put("/courses/update/1")
      .send(updatedCourse)
      .expect(200);
  });

  // --------------------------List with ID-------------------------------
  it("should return a course with id 1 sorted in descending order of IDs", async () => {
    const response = await request(app)
      .get("/courses")
      .query({ id: 1, sort: "id_desc" });

    expect(response.status).toBe(200);
  });

  // --------------------------List-------------------------------
  it("should return courses with an empty desc (description) sorted in descending order of descriptions", async () => {
    const response = await request(app)
      .get("/courses")
      .query({ desc: " ", sort: "desc_desc" });

    expect(response.status).toBe(200);
  });
  // --------------------------List-------------------------------
  it("should return courses sorted by sourse title ", async () => {
    const response = await request(app)
      .get("/courses")
      .query({ title: "Mathematics", sort: "title_desc" });

    expect(response.status).toBe(200);
  });
  // --------------------------Delete-------------------------------
  it("should delete a course", async () => {
    await request(app).delete("/courses/delete/1").expect(200);

    // Verify that the course is deleted by getting it again (should return 404)
    await request(app).get("/courses/1").expect(404);
  });
});
