using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static BeWell.Models.Student.CreateStudentRequest;

namespace BeWell.Models.Student
{
    public class Student
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Password { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public int TeacherId { get; set; }
        public Grade StudentGrade { get; set; }

        public enum Grade
        {
            Kindergarten,
            First,
            Second,
            Third,
            Fourth
        }
    }
}
