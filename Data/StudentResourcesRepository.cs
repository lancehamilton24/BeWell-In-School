using BeWell.Models.Student;
using BeWell.Models.StudentResources;
using Dapper;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace BeWell.Data
{
    public class StudentResourcesRepository
    {
        const string ConnectionString = "Server=localhost;Database=BeWell;Trusted_Connection=True;";

        public StudentResources AddStudentResource(string title, string description, string url)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var addResource = db.QueryFirstOrDefault<StudentResources>(@"
                    Insert into StudentResources (title, description, url)
                    Output inserted.*
                    Values(@title,@description,@url)",
                    new { title, description, url });


                if (addResource != null)
                {
                    return addResource;
                }
            }

            throw new Exception("No question created");
        }

        public IEnumerable<StudentResources> GetAllResources()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var allResources = db.Query<StudentResources>(@"Select * from StudentResources").ToList();
                return allResources;
            }
        }

        public StudentResources GetSingleResource(int id)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var allResources = db.QueryFirstOrDefault<StudentResources>(@"Select * from StudentResources where id = @id", new { id });
                return allResources;
            }
        }

        public StudentResources DeleteSingleResource(int id)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var deletedResource = db.QueryFirstOrDefault<StudentResources>(@"delete
                                                                       from StudentResources
                                                                       where id = @id",
                                                                       new { id });
                return deletedResource;
            }
        }

        public StudentResources UpdateSingleResource(StudentResources resource)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var updatedResource = db.QueryFirstOrDefault<StudentResources>(@"update StudentResources
                                        set title = @title,
                                            description = @description,
                                            url = @url
                                            output inserted.*
                                            where id = @id",
                                                            new
                                                            {
                                                                id = resource.Id,
                                                                title = resource.Title,
                                                                description = resource.Description,
                                                                url = resource.Url
                                                            });
                return updatedResource;
            }
            throw new System.Exception("Could not update question.");
        }
    }
}
