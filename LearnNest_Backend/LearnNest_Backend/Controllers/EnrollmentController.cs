using LearnNest_Backend.Data;
using LearnNest_Backend.Models;
using LearnNest_Backend.Models.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LearnNest_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EnrollmentController : ControllerBase
    {
        private readonly ApplicationDbContext dbContext;

        public EnrollmentController(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetAllEnrollments() 
        {
            var EnrollmentsList = dbContext.EnrollmentsT.ToList();
            return Ok(EnrollmentsList);
        }

        [HttpPost]
        public IActionResult AddNewEnrollment(EnrollmentsDTO enrollmentsDTO) 
        {
            var ExistingEnrollment = dbContext.EnrollmentsT.FirstOrDefault
                (e => e.StudentEmail == enrollmentsDTO.StudentEmail && e.CourseName == enrollmentsDTO.CourseName);

            if (ExistingEnrollment == null) 
            {
                var EnrollmentEntity = new Enrollments()
                {
                    CourseName = enrollmentsDTO.CourseName,
                    StudentName = enrollmentsDTO.StudentName,
                    StudentEmail = enrollmentsDTO.StudentEmail,
                    ContactNo = enrollmentsDTO.ContactNo,
                    Address = enrollmentsDTO.Address,
                    NestLocation = enrollmentsDTO.NestLocation
                };

                dbContext.EnrollmentsT.Add(EnrollmentEntity);
                dbContext.SaveChanges();
                return Ok(EnrollmentEntity);
            }
            else
            {
                return BadRequest("You have already enrolled for this course");
            }
        }

        [HttpPut]
        [Route("{Id:Guid}")]
        public IActionResult UpdateEnrollment(Guid Id, EnrollmentsDTO enrollmentsDTO)
        {
            var updateEnrollment = dbContext.EnrollmentsT.Find(Id);

            if (updateEnrollment != null)
            {
                updateEnrollment.CourseName = enrollmentsDTO.CourseName;
                updateEnrollment.StudentName = enrollmentsDTO.StudentName;
                updateEnrollment.StudentEmail = enrollmentsDTO.StudentEmail;
                updateEnrollment.ContactNo = enrollmentsDTO.ContactNo;
                updateEnrollment.Address = enrollmentsDTO.Address;
                updateEnrollment.NestLocation = enrollmentsDTO.NestLocation;

                dbContext.SaveChanges();
                return Ok("Updated");
            }
            else
            {
                return NotFound("This Enrollment is not found");
            }
        }

        [HttpDelete]
        [Route("{Id:Guid}")]
        public IActionResult DeleteEnrollment(Guid Id)
        {
            var deltedId = dbContext.EnrollmentsT.Find(Id);
            if (deltedId != null)
            { 
                dbContext.EnrollmentsT.Remove(deltedId);
                dbContext.SaveChanges();
                return Ok("Deleted");
            }else
            {
                return NotFound();
            }
        }
    }
}
