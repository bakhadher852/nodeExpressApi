// router.get("/", (req, res) =>
//   CoursesMod
//     .findAll()
//     .then((CoursesMods) => {
//       const courseData = CoursesMods.map((course) => ({
//         id: course.dataValues.id,
//         title: course.dataValues.title,
//         desc: course.dataValues.desc,
//       }));
//       res.json(courseData);
//       res.sendStatus(200);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.sendStatus(500);
//     })
// );
/*In this CoursesModified code, we've added two new query parameters: page and pageSize. These parameters control the pagination. The page parameter specifies the current page number, and the pageSize parameter specifies the number of records to show per page.

The offset is calculated based on the current page number and page size. It determines how many records to skip before starting to retrieve data. The limit option is set to the pageSizeNumber to limit the number of records returned per page.

Now, when you make a request like http://localhost:3000/courses/?page=2&pageSize=10, it will retrieve the second page of results with 10 records per page. */

//My way to use findAll
// router.get("/", async function (req, res) {
//   let r = await CoursesMod.findAll();
//   var courses = r.map((course) => ({
//     id: course.dataValues.id,
//     title: course.dataValues.title,
//     descreption: course.dataValues.desc,
//   }));
//   console.log("==========================", courses);
//   res.json(courses);
// });
/*         

courses/?title=math for any coulumn title or param
       
pagination 20 20 
courses/?pagesize50 pagenumber=2 means second 50
page_No
page_size

sort title asending 
_asendign=Key  title id desc



*/
