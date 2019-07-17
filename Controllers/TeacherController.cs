using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using BeWell.Data;
using BeWell.Models;
//using BeWell.Validator;
using Microsoft.AspNetCore.Mvc;
using BeWell.Models.Teacher;

namespace BeWell.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeacherController : ControllerBase
    {
        readonly TeacherRepository _teacherRepository;
        //readonly CreateTeacherRequestValidator _validator;
        // readonly CreateCustomerProductValidator _customerProductValidator;

        // GET: /<controller>/
        public TeacherController()
        {
            //_validator = new CreateTeacherRequestValidator();
            _teacherRepository = new TeacherRepository();
        }
        [HttpPost("register")]
        public ActionResult AddTeacher(CreateTeacherRequest createRequest)
        {
               
            var newTeacher = _teacherRepository.AddTeacher(createRequest.FirstName, createRequest.LastName, createRequest.Grade);
            return Created($"/api/customers/{newTeacher.Id}", newTeacher);

        }

    }
}