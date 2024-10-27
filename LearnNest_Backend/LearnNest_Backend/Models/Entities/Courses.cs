using System.ComponentModel.DataAnnotations;

namespace LearnNest_Backend.Models.Entities
{
    public class Courses
    {
        [Key]
        public Guid CourseId { get; set; }
        public string CourseName { get; set; }
        public string CourseDescription { get; set; }
        public int CourseDuration { get; set; }
        public double CourseFee { get; set; }

    }
}
