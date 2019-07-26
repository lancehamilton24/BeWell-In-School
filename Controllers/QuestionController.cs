using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BeWell.Data;
using BeWell.Models.Question;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BeWell.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionController : ControllerBase
    {
        readonly QuestionRepository _questionRepository;


        public QuestionController()
        {
            _questionRepository = new QuestionRepository();
        }
        [HttpPost("register")]
        public ActionResult AddQuestion(CreateQuestionRequest createRequest)
        {

            var newQuestion = _questionRepository.AddQuestion(createRequest.QuestionText);
            return Created($"/api/student/{newQuestion.Id}", newQuestion);

        }
        [HttpGet("allQuestions")]
        public ActionResult GetAllQuestions()
        {
            var questions = _questionRepository.GetAllQuestions();

            return Ok(questions);
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteSingleQuestion(int id)
        {
            var deletedQuestion = _questionRepository.DeleteSingleQuestion(id);
            return Ok(deletedQuestion);
        }
    }
}