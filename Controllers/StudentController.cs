using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BeWell.Data;
using BeWell.Models.Student;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using static BeWell.Models.Student.CreateStudentRequest;

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

        [HttpGet("singleStudent/{id}")]
        public ActionResult GetSingleStudent(int id)
        {
            var singleStudent = _studentRepository.GetSingleStudent(id);
            return Ok(singleStudent);
        }

        [HttpGet("allstudents")]
        public ActionResult GetAllStudents()
        {
            var students = _studentRepository.GetAllStudents();

            return Ok(students);
        }

        [HttpGet("allStudents/{teacherId}")]
        public ActionResult GetStudentsByTeacher(int teacherId)
        {
            var students = _studentRepository.GetStudentsByTeacher(teacherId);

            return Ok(students);
        }
    }
}