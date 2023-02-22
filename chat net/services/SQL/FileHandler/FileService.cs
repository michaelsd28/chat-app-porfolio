using chat_net.models;
using Microsoft.AspNetCore.Mvc;
using Npgsql;
using static System.Net.Mime.MediaTypeNames;
using System.Net.NetworkInformation;
using System.IO;
using System.Diagnostics;
using Npgsql.Internal.TypeHandlers;

namespace chat_net.services.SQL.FileHandler
{
    public class FileService
    {

        public static string? SaveFile(SQLFile file)
        {

            Guid randomID = Guid.NewGuid();
            try
            {

                var connection = SQLConnection.GetConnection();

                string query = "INSERT INTO files (   id,filename,filedata) VALUES (@id,@file_name, @file_data)";

                using (var command = new NpgsqlCommand(query, connection))
                {

                    command.Parameters.AddWithValue("file_name", file.FileName);
                    command.Parameters.AddWithValue("file_data", file.FileData);
                    command.Parameters.AddWithValue("id", randomID.ToString());



                    var reader = command.ExecuteReader();






                    return randomID.ToString();   
                }


         
            }
            catch
            {
                return null;
            }
        }




        internal static FileStreamResult? GetFile(string fileID)
        {

            string query = $@"select * from files where id = '{fileID}';";

            var stream = new MemoryStream();

            var connection = SQLConnection.GetConnection();


            var command = new NpgsqlCommand(query, connection);
            var reader = command.ExecuteReader();
            
            return SQLFile.GetFileFromReader(reader);

            

        }
        
    }
}
