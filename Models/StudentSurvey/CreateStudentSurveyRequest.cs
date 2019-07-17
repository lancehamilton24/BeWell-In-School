using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BeWell.Models.StudentSurvey
{
    public class CreateStudentSurveyRequest
    {
        public int Id { get; set; }
        public int StudentId { get; set; }
        public string TeacherComments { get; set; }
        public int SurveyId { get; set; }
    }
}
