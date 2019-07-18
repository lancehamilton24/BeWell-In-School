using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BeWell.Models.Teacher
{
    public class CreateTeacherRequest
    {
        public int Id { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public Grade Grade { get; set; }
    }

    public enum Grade
    {
        Kindergarten,
        First,
        Second,
        Third,
        Fourth
    }
}
