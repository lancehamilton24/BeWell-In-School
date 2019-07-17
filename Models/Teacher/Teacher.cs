using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BeWell.Models.Teacher
{
    public class Teacher
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Password { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public int Grade { get; set; }
        public bool IsAdmin { get; set; }
    }
}
