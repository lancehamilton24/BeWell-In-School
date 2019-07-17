using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BeWell.Models.Student
{
    public class CreateStudentRequest
    {
        public int Id { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public int TeacherId { get; set; }
        public int Grade { get; set; }
    }
}
