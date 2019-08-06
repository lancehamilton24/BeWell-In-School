﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BeWell.Models.Answer
{
    public class CreateAnswerRequest
    {
        public int Id { get; set; }
        //public string AnswerText { get; set; }
        //public int AnswerNumber { get; set; }
        //public int QuestionId { get; set; }
        public int StudentId { get; set; }
        public List<Answer> Answers { get; set; }
    }
}
