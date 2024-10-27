using LearnNest_Backend.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace LearnNest_Backend.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) 
        {
            
        }

        public DbSet<Courses> CoursesT { get; set; }
        public DbSet<Nest> NestsT { get; set; }
        public DbSet<Enrollments> EnrollmentsT { get; set; }
    }
}
