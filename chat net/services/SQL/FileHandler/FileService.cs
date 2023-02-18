using chat_net.models;
using Microsoft.AspNetCore.Mvc;
using Npgsql;
using static System.Net.Mime.MediaTypeNames;
using System.Net.NetworkInformation;
using System.IO;

namespace chat_net.services.SQL.FileHandler
{
    public class FileService
    {

        public static string SaveFile(SQLFile file)
        {
            String fileID = "invalid operation";
            try
            {

                var connection = SQLConnection.GetConnection();

                string query = "INSERT INTO files (   filename,filedata) VALUES (@file_name, @file_data)";

                using (var command = new NpgsqlCommand(query, connection))
                {

                    command.Parameters.AddWithValue("file_name", file.FileName);
                    command.Parameters.AddWithValue("file_data", file.FileData);

                 

                    var reader = command.ExecuteReader();

                    while (reader.Read())
                    {
                        fileID = reader["id"].ToString();
                    }

                }


                return fileID;
            }
            catch
            {
                return fileID;
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
