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

        public IEnumerable<Question> GetAllQuestions()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var allQuestions = db.Query<Question>(@"Select * from Question").ToList();
                return allQuestions;
            }
        }

        public Question DeleteSingleQuestion(int id)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var deletedQuestion = db.QueryFirstOrDefault<Question>(@"delete
                                                                       from Question
                                                                       where id = @id",
                                                                       new { id });
                return deletedQuestion;
            }
        }
    }
}
