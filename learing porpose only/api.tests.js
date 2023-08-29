// // test/api.test.js
// const request = require("supertest");
// const port = require("../app");
// // const app = "https://restful-booker.herokuapp.com";
// const app = `http://localhost:${port}`;
// const { expect } = require("chai");

// describe("CRUD Operations", () => {
//   let courseId = 1; // Will store the ID of the created course for further tests

//   // Test for creating a new course
//   it("should create a new course", async () => {
//     const newCourse = {
//       title: "Mathematics",
//       desc: "A course on mathematics",
//     };

//     const response = await request(app)
//       .post("/courses/add")
//       .send(newCourse)
//       .expect(201);

//     console.log("======start=====response.Response;==========");
//     // console.log(response);
//     console.log("=======end====response.Response==========");

//     expect(courseId).to.be.a("number");
//   });

//   // Test for getting all courses
//   // it("should get all courses", async () => {
//   //   const response = await request(app)
//   //     .get("/courses")
//   //     .expect(200)
//   //     .expect("Content-Type", /json/);

//   //   expect(response.body).to.be.an("array");
//   // });

//   // Test for getting a single course by ID
//   it("should get a course by ID", async () => {
//     if (!courseId) {
//       // Ensure that a course ID is available for testing
//       throw new Error("Course ID not available.");
//     }

//     const response = await request(app)
//       .get(`/courses/${courseId}`)
//       .expect(200)
//       .expect("Content-Type", /json/);

//     expect(response.body).to.have.property("id", courseId);
//     expect(response.body.title).to.equal("Mathematics");
//   });

//   // Test for updating a course
//   it("should update a course", async () => {
//     if (!courseId) {
//       // Ensure that a course ID is available for testing
//       throw new Error("Course ID not available.");
//     }

//     const updatedCourse = {
//       title: "Updated Mathematics",
//       desc: "An updated course on mathematics",
//     };

//     const response = await request(app)
//       .put(`/courses/update/${courseId}`)
//       .send(updatedCourse)
//       .expect(200);

//     expect(response.body).to.have.property("id", courseId);
//     expect(response.body.title).to.equal("Updated Mathematics");
//   });

//   // Test for deleting a course
//   it("should delete a course", async () => {
//     if (!courseId) {
//       // Ensure that a course ID is available for testing
//       throw new Error("Course ID not available.");
//     }

//     await request(app).delete(`/courses/delete/${courseId}`).expect(200);

//     // Verify that the course is deleted by getting it again (should return 404)
//     await request(app).get(`/courses/${courseId}`).expect(404);
//   });
// });
// //npx mocha to run
