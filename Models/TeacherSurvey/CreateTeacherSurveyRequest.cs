using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BeWell.Models.TeacherSurvey
{
    public class CreateTeacherSurveyRequest
    {
        public int Id { get; set; }
        public int TeacherId { get; set; }
        public int SurveyId { get; set; }
    }
}
