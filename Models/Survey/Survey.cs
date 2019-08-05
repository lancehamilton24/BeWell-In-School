﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BeWell.Models.Survey
{
    public class Survey
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public int QuestionId { get; set; }
        public int AnswerId { get; set; }
        public int StudentId { get; set; }
        public string AnswerText { get; set; }
    }
}
