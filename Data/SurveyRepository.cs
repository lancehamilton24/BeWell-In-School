using BeWell.Models.Survey;
using Dapper;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace BeWell.Data
{
    public class SurveyRepository
    {
        const string ConnectionString = "Server=localhost;Database=BeWell;Trusted_Connection=True;";

        public Survey AddSurvey(int questionId, int studentId, string answerText)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var addStudentInformation = db.QueryFirstOrDefault<Survey>(@"
                    Insert into Survey (questionId, studentId, answerText )
                    Output inserted.*
                    Values(@questionId,@studentId,@answerText )",
                    new { questionId, studentId, answerText, DateTime.Now});

                if (addStudentInformation != null)
                {
                    return addStudentInformation;
                }
            }

            throw new Exception("No user created");
        }

        public IEnumerable<Survey> GetAllSurveys()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var allSurveys = db.Query<Survey>(@"Select * from Survey").ToList();
                return allSurveys;
            }
        }
    }
}
