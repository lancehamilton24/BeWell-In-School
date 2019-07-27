using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BeWell.Data;
using BeWell.Models.StudentSurvey;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BeWell.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentSurveyController : ControllerBase
    {
        readonly StudentSurveyRepository _studentSurveyRepository;
        //readonly CreateTeacherRequestValidator _validator;
        // readonly CreateCustomerProductValidator _customerProductValidator;

        // GET: /<controller>/
        public StudentSurveyController()
        {
            //_validator = new CreateTeacherRequestValidator();
            _studentSurveyRepository = new StudentSurveyRepository();
        }
        [HttpPost("register")]
        public ActionResult AddStudentSurvey(CreateStudentSurveyRequest createRequest)
        {
            
            var newStudentSurvey = _studentSurveyRepository.AddStudentSurvey(createRequest.StudentId, createRequest.SurveyId, createRequest.TeacherComments);
            return Created($"/api/student/{newStudentSurvey.Id}", newStudentSurvey);

        }

    }
}