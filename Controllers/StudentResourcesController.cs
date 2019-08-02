using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BeWell.Data;
using BeWell.Models.StudentResources;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BeWell.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentResourcesController : ControllerBase
    {
        readonly StudentResourcesRepository _studentResourcesRepository;
        //readonly CreateTeacherRequestValidator _validator;
        // readonly CreateCustomerProductValidator _customerProductValidator;

        // GET: /<controller>/
        public StudentResourcesController()
        {
            //_validator = new CreateTeacherRequestValidator();
            _studentResourcesRepository = new StudentResourcesRepository();
        }
        [HttpPost("register")]
        public ActionResult AddStudent(CreateStudentResourcesRequest createRequest)
        {

            var newStudent = _studentResourcesRepository.AddStudentResource(createRequest.Title, createRequest.Description, createRequest.Url);
            return Created($"/api/student/{newStudent.Id}", newStudent);

        }
        [HttpGet("allResources")]
        public ActionResult GetAllResources()
        {
            var resources = _studentResourcesRepository.GetAllResources();

            return Ok(resources);
        }

        [HttpGet("allResources/{id}")]
        public ActionResult GetSingleResource(int id)
        {
            var singleResource = _studentResourcesRepository.GetSingleResource(id);
            return Ok(singleResource);
        }

        [HttpDelete("deleteResource/{id}")]
        public ActionResult DeleteSingleResource(int id)
        {
            var deletedResource = _studentResourcesRepository.DeleteSingleResource(id);
            return Ok(deletedResource);
        }

        [HttpPut("updateResource/{id}")]
        public ActionResult UpdateSingleResource(StudentResources resource)
        {
            var updateSingleResource = _studentResourcesRepository.UpdateSingleResource(resource);
            return Ok(updateSingleResource);
        }
    }
}