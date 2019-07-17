using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BeWell.Models.Question
{
    public class CreateQuestionRequest
    {
        public int Id { get; set; }
        public string QuestionText { get; set; }
    }
}
