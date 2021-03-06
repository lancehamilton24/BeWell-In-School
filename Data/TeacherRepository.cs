﻿using BeWell.Models.Teacher;
using System;
using Dapper;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace BeWell.Data
{
    public class TeacherRepository
    {
        const string ConnectionString = "Server=localhost;Database=BeWell;Trusted_Connection=True;";

        public Teacher AddTeacher(string firstName, string lastName, Grade grade)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var addTeacherInformation = db.QueryFirstOrDefault<Teacher>(@"
                    Insert into teacher (firstName,lastName, grade)
                    Output inserted.*
                    Values(@firstName,@lastName,@grade)",
                    new { firstName, lastName, grade });


                if (addTeacherInformation != null)
                {
                    return addTeacherInformation;
                }
            }

            throw new Exception("No user created");
        }

        public IEnumerable<Teacher> GetTeachers()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var allTeachers = db.Query<Teacher>(@"Select * from Teacher order by grade asc").ToList();
                return allTeachers;
            }
        }

        public IEnumerable<Teacher> GetTeacherByGrade(int grade)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var allTeachers = db.Query<Teacher>(@"Select * 
                                                      from Teacher
                                                       Where grade = @grade",
                                                       new { grade });

                return allTeachers;
            }
        }


    }
}
