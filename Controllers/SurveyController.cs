using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BeWell.Data;
using BeWell.Models.Survey;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BeWell.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SurveyController : ControllerBase
    {
        readonly SurveyRepository _surveyRepository;
        //readonly CreateTeacherRequestValidator _validator;
        // readonly CreateCustomerProductValidator _customerProductValidator;

        // GET: /<controller>/
        public SurveyController()
        {
            //_validator = new CreateTeacherRequestValidator();
            _surveyRepository = new SurveyRepository();
        }
        [HttpPost("register")]
        public ActionResult AddSurvey(CreateSurveyRequest createRequest)
        {

            var newSurvey = _surveyRepository.AddSurvey(createRequest.Date, createRequest.QuestionId, createRequest.AnswerId);
            return Created($"/api/student/{newSurvey.Id}", newSurvey);

        }
        [HttpGet("allsurveys")]
        public ActionResult GetAllSurveys()
        {
            var surveys = _surveyRepository.GetAllSurveys();

            return Ok(surveys);
        }
    }
}