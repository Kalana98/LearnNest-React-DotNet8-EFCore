using LearnNest_Backend.Data;
using LearnNest_Backend.Models;
using LearnNest_Backend.Models.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LearnNest_Backend.Controllers
{
    //localhost:xxxx/api/nest
    [Route("api/[controller]")]
    [ApiController]
    public class NestController : ControllerBase
    {
        private readonly ApplicationDbContext dbContext;

        public NestController(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetAllNests()
        {
            var ListOfNests = dbContext.NestsT.ToList();
            return Ok(ListOfNests);
        }

        [HttpGet]
        [Route("{NestId:Guid}")]
        public IActionResult GetNestById(Guid NestId)
        {
            var nest = dbContext.NestsT.Find(NestId);

            if (nest == null)
            {
                return NotFound("This Nest is not in the database");
            }
            else
            {
                return Ok(nest);
            }
        }

        [HttpPost]
        public IActionResult AddNewNest(NestDTO nestDTO)
        {
            var nest = dbContext.NestsT.FirstOrDefault(n => n.NestName == nestDTO.NestName);

            if (nest != null)
            {
                return BadRequest("This Nest is already in the database");
            }
            else
            {
                var NestEntity = new Nest()
                {
                    NestName = nestDTO.NestName,
                    NestLocation = nestDTO.NestLocation,
                    NestDescription = nestDTO.NestDescription
                };
                dbContext.NestsT.Add(NestEntity);
                dbContext.SaveChanges();
                return Ok(NestEntity);
            }
        }

        [HttpPut]
        [Route("{NestId:Guid}")]
        public IActionResult UpdateNest(Guid NestId, NestDTO nestDTO)
        {
            var updatingNest = dbContext.NestsT.Find(NestId);

            if(updatingNest == null)
            {
                return NotFound("This Nest is not in the database");
            }
            else
            {
                updatingNest.NestName = nestDTO.NestName;
                updatingNest.NestLocation = nestDTO.NestLocation;
                updatingNest.NestDescription = nestDTO.NestDescription;

                dbContext.SaveChanges();
                return Ok(updatingNest);
            }
        }

        [HttpDelete]
        [Route("{NestId:Guid}")]
        public IActionResult DeleteNest(Guid NestId)
        {
            var deletedNest = dbContext.NestsT.Find(NestId);
            if (deletedNest == null)
            {
                return NotFound("This nest is not found");
            }
            else
            {
                dbContext.NestsT.Remove(deletedNest);
                dbContext.SaveChanges();
                return Ok("Successfully deleted");
            }
        }
    }
}
