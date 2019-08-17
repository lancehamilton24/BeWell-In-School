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

        public Question AddQuestion(string questionText, DateTime questionDate)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var addQuestion = db.QueryFirstOrDefault<Question>(@"
                    Insert into Question (questionText,questionDate)
                    Output inserted.*
                    Values(@questionText,@questionDate)",
                    new { questionText, questionDate });


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

        public IEnumerable<Question> GetNewQuestion()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var newQuestion = db.Query<Question>(@"SELECT TOP 1 * FROM Question ORDER BY id DESC").ToList();
                return newQuestion;
            }
        }
        

        public Question GetQuestionById(int id)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var singleQuestion = db.QueryFirstOrDefault<Question>(@"Select * from Question where id = @id", new { id });
                return singleQuestion;
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

        public Question UpdateSingleQuestion(Question question)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var updatedQuestion = db.QueryFirstOrDefault<Question>(@"update Question
                                        set questionText = @questionText
                                            output inserted.*
                                            where id = @id",
                                                            new
                                                            {
                                                                id = question.Id,
                                                                questionText = question.QuestionText,
                                                            });
                return updatedQuestion;
            }
            throw new System.Exception("Could not update question.");
        }
    }
}
