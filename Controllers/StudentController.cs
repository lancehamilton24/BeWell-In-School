using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BeWell.Data;
using BeWell.Models.Student;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BeWell.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        readonly StudentRepository _studentRepository;
        //readonly CreateTeacherRequestValidator _validator;
        // readonly CreateCustomerProductValidator _customerProductValidator;

        // GET: /<controller>/
        public StudentController()
        {
            //_validator = new CreateTeacherRequestValidator();
            _studentRepository = new StudentRepository();
        }
        [HttpPost("register")]
        public ActionResult AddStudent(CreateStudentRequest createRequest)
        {

            var newStudent = _studentRepository.AddStudent(createRequest.FirstName, createRequest.LastName, createRequest.TeacherId, createRequest.StudentGrade);
            return Created($"/api/student/{newStudent.Id}", newStudent);

        }
    }
}