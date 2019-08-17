﻿using System;
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


        public AnswerController()
        {
            _answerRepository = new AnswerRepository();
        }

        [HttpPost("register")]
        public ActionResult AddAnswer(CreateAnswerRequest createRequest)
        {

            var newAnswer = _answerRepository.AddAnswer(createRequest.AnswerText, createRequest.StudentId, createRequest.QuestionId, createRequest.AnswerDate);
            return Created($"/api/student/{newAnswer.Id}", newAnswer);

        }
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