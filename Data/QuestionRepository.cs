using BeWell.Models.Question;
using Dapper;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace BeWell.Data
{
    public class QuestionRepository
    {
        const string ConnectionString = "Server=localhost;Database=BeWell;Trusted_Connection=True;";

        public Question AddQuestion(string questionText)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var addQuestion = db.QueryFirstOrDefault<Question>(@"
                    Insert into Question (questionText)
                    Output inserted.*
                    Values(@questionText)",
                    new { questionText });


                if (addQuestion != null)
                {
                    return addQuestion;
                }
            }

            throw new Exception("No question created");
        }
    }
}
