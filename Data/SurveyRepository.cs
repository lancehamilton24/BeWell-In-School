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

        public Survey AddSurvey(DateTime date, int questionId, int answerId)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var addStudentInformation = db.QueryFirstOrDefault<Survey>(@"
                    Insert into Survey (date, questionId, answerId )
                    Output inserted.*
                    Values(@date,@questionId,@answerId )",
                    new { date, questionId, answerId });


                if (addStudentInformation != null)
                {
                    return addStudentInformation;
                }
            }

            throw new Exception("No user created");
        }
    }
}
