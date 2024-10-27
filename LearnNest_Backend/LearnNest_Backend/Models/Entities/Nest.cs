using System.ComponentModel.DataAnnotations;

namespace LearnNest_Backend.Models.Entities
{
    public class Nest
    {
        [Key]
        public Guid NestId { get; set; }
        public string NestName { get; set; }
        public String NestLocation { get; set; }
        public String NestDescription { get; set; }

    }
}
