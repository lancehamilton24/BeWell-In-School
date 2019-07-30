using BeWell.Models.Question;
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

        public Student AddStudent(string firstName, string lastName, int teacherId, Grade studentGrade)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var addStudentInformation = db.QueryFirstOrDefault<Student>(@"
                    Insert into Student (firstName,lastName, teacherId, studentGrade)
                    Output inserted.*
                    Values(@firstName,@lastName,@teacherId,@studentGrade)",
                    new { firstName, lastName, teacherId, studentGrade });


                if (addStudentInformation != null)
                {
                    return addStudentInformation;
                }
            }

            throw new Exception("No user created");
        }

        public IEnumerable<Student> GetAllStudents()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var allStudents = db.Query<Student>(@"Select * from Student").ToList();
                return allStudents;
            }
        }

        public IEnumerable<Student> GetStudentsByTeacher(int teacherId)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var allStudentsByTeacher = db.Query<Student>("Select * from student where TeacherId = @teacherId", new { teacherId }).ToList();

                return allStudentsByTeacher;
            }
        }
    }
}
