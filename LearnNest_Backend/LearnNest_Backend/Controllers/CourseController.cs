using LearnNest_Backend.Data;
using LearnNest_Backend.Models;
using LearnNest_Backend.Models.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LearnNest_Backend.Controllers
{
    //localhost:xxxx/api/course
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {
        private readonly ApplicationDbContext dBContext;

        public CourseController(ApplicationDbContext dBContext)
        {
            this.dBContext = dBContext;
        }

        [HttpGet]
        public IActionResult GetAllCourses()
        {
            var Courses = dBContext.CoursesT.ToList();
            return Ok(Courses);
        }

        [HttpGet]
        [Route("{CourseId:Guid}")]
        public IActionResult GetCourseById(Guid CourseId) 
        {
            var Course = dBContext.CoursesT.Find(CourseId);

            if (Course == null)
            {
                return NotFound("This Course is Not Found");
            }

            return Ok(Course);
        }

        [HttpPost]
        public String AddNewCourse(CourseDTO courseDTO)
        {
            var NewCourse = dBContext.CoursesT.FirstOrDefault(c => c.CourseName == courseDTO.CourseName);

            if (NewCourse == null) 
            {
                var CourseEntity = new Courses
                {
                    CourseName = courseDTO.CourseName,
                    CourseDescription = courseDTO.CourseDescription,
                    CourseDuration = courseDTO.CourseDuration,
                    CourseFee = courseDTO.CourseFee
                };

                dBContext.CoursesT.Add(CourseEntity);
                dBContext.SaveChanges();
                return ("New Course is added successfully");
            }
            else
            {
                return ("This course is already saved in the database");
            }
        }

        [HttpPut]
        [Route("{CourseId:Guid}")]
        public String UpdateCourse(Guid CourseId, CourseDTO courseDTO)
        {
            var Course = dBContext.CoursesT.Find(CourseId);

            if (Course == null)
            {
                return ("Not Found");
            }
            else
            {
                Course.CourseName = courseDTO.CourseName;
                Course.CourseDescription = courseDTO.CourseDescription;
                Course.CourseDuration = courseDTO.CourseDuration;
                Course.CourseFee = courseDTO.CourseFee;

                dBContext.SaveChanges();

                return ("Updated Successfully");
            }
        }

        [HttpDelete]
        [Route("{CourseId:Guid}")]
        public String DeleteCourse(Guid CourseId)
        {
            var course = dBContext.CoursesT.Find(CourseId);
            if (course == null)
            {
                return "not found";
            }
            else
            {
                dBContext.CoursesT.Remove(course);
                dBContext.SaveChanges();
                return "Successfully deleted";
            }
        }
    }
}
