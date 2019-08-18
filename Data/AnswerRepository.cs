using BeWell.Models.Answer;
using Dapper;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace BeWell.Data
{
    public class AnswerRepository
    {
        const string ConnectionString = "Server=localhost;Database=BeWell;Trusted_Connection=True;";

        public Answer AddAnswer(string answerText, int studentId, int questionId, DateTime answerDate)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var addAnswer = db.QueryFirstOrDefault<Answer>(@"
                    Insert into Answer (answerText, studentId, questionId, answerDate)
                    Output inserted.*
                    Values(@answerText,@studentId,@questionId,@answerDate)",
                    new { answerText, studentId, questionId, answerDate });


                if (addAnswer != null)
                {
                    return addAnswer;
                }
            }

            throw new Exception("No answer created");
        }

        //public Answer AddNumberAnswer(int answerNumber)
        //{
        //    using (var db = new SqlConnection(ConnectionString))
        //    {
        //        var addAnswer = db.QueryFirstOrDefault<Answer>(@"
        //            Insert into Answer (answerNumber)
        //            Output inserted.*
        //            Values(@answerNumber)",
        //            new { answerNumber });


        //        if (addAnswer != null)
        //        {
        //            return addAnswer;
        //        }
        //    }

        //    throw new Exception("No answer created");
        //}

        public IEnumerable<Answer> GetAllAnswers()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var allAnswers = db.Query<Answer>(@"Select * from Answer").ToList();
                return allAnswers;
            }

        }

        public IEnumerable<Answer> GetAnswersByStudentId(int studentId)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var allAnswersByStudentId = db.Query<Answer>("Select * from Answer where StudentId = @studentId", new { studentId }).ToList();

                return allAnswersByStudentId;
            }
        }

        public Answer DeleteSingleAnswer(int id)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var deletedAnswer = db.QueryFirstOrDefault<Answer>(@"delete
                                                                       from Answer
                                                                       where id = @id",
                                                                       new { id });
                return deletedAnswer;
            }
        }
    }
}
