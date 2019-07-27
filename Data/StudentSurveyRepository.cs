using BeWell.Models.StudentSurvey;
using Dapper;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace BeWell.Data
{
    public class StudentSurveyRepository
    {
        const string ConnectionString = "Server=localhost;Database=BeWell;Trusted_Connection=True;";

        public StudentSurvey AddStudentSurvey(int studentId, int surveyId, string teacherComments)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var addStudentSurvey = db.QueryFirstOrDefault<StudentSurvey>(@"
                    Insert into StudentSurvey (studentId, surveyId, teacherComments)
                    Output inserted.*
                    Values(@studentId,@surveyId,@teacherComments)",
                    new { studentId, surveyId, teacherComments });


                if (addStudentSurvey != null)
                {
                    return addStudentSurvey;
                }
            }

            throw new Exception("No user created");
        }

        public IEnumerable<StudentSurvey> GetAllStudentSurveys()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var allSurveys = db.Query<StudentSurvey>(@"Select * from StudentSurvey").ToList();
                return allSurveys;
            }
        }

        public IEnumerable<StudentSurvey> GetSurveyByStudent(int studentId)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var surveyByStudent = db.Query<StudentSurvey>("Select * from studentsurvey where StudentId = @studentId", new { studentId }).ToList();

                return surveyByStudent;
            }
        }
    }
}
