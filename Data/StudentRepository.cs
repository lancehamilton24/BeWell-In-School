using BeWell.Models.Student;
using Dapper;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using static BeWell.Models.Student.CreateStudentRequest;

namespace BeWell.Data
{
    public class StudentRepository
    {
        const string ConnectionString = "Server=localhost;Database=BeWell;Trusted_Connection=True;";

        public Student AddStudent(string firstName, string lastName, int teacherId, Grade grade)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var addStudentInformation = db.QueryFirstOrDefault<Student>(@"
                    Insert into Student (firstName,lastName, teacherId, grade)
                    Output inserted.*
                    Values(@firstName,@lastName,@teacherId,@grade)",
                    new { firstName, lastName, teacherId, grade });


                if (addStudentInformation != null)
                {
                    return addStudentInformation;
                }
            }

            throw new Exception("No user created");
        }
    }
}
