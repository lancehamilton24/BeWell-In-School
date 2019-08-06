using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BeWell.Data;
using BeWell.Models.Answer;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BeWell.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnswerController : ControllerBase
    {
        readonly AnswerRepository _answerRepository;
        readonly SurveyRepository _surveyRepository;


        public AnswerController()
        {
            _answerRepository = new AnswerRepository();
            _surveyRepository = new SurveyRepository();
        }
        [HttpPost("register")]
        public ActionResult AddTextAnswer(CreateAnswerRequest createRequest)
        {

            _surveyRepository.AddSurvey(createRequest.StudentId);
            foreach (var answer in createRequest.Answers)
            {
                var newAnswer = _answerRepository.AddTextAnswer(answer.AnswerText, answer.QuestionId);
            }

            return Ok();

        }
        //[HttpPost("registerNumber")]
        //public ActionResult AddNumberAnswer(CreateAnswerRequest createRequest)
        //{

        //    var newAnswer = _answerRepository.AddNumberAnswer(createRequest.AnswerNumber);
        //    return Created($"/api/student/{newAnswer.Id}", newAnswer);

        //}
        [HttpGet("allAnswers")]
        public ActionResult GetAllAnswers()
        {
            var Answers = _answerRepository.GetAllAnswers();

            return Ok(Answers);
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteSingleAnswer(int id)
        {
            var deletedAnswer = _answerRepository.DeleteSingleAnswer(id);
            return Ok(deletedAnswer);
        }
    }
}