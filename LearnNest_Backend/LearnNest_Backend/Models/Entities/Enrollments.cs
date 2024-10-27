using System.ComponentModel.DataAnnotations;

namespace LearnNest_Backend.Models.Entities
{
    public class Enrollments
    {
        [Key]
        public Guid Id { get; set; }
        public String CourseName { get; set; }
        public String StudentName { get; set; }
        public String StudentEmail { get; set; }
        public String ContactNo { get; set; }
        public String Address { get; set; }
        public String NestLocation { get; set; }
    }
}
