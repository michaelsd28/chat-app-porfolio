using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using System.IO;

namespace chat_net.models
{
    public class SQLFile
    {


        public int id { get; set; } = 0;
        public string FileName { get; set; } = "";
        public byte[] FileData { get; set; } = { byte.MinValue };

        internal static FileStreamResult? GetFileFromReader(Npgsql.NpgsqlDataReader reader )
        {
            Stream stream = new MemoryStream();
            while (reader.Read())
            {

                var file = new SQLFile()
                {
                    FileName = reader["filename"].ToString(),
                    FileData = (byte[])reader["filedata"]
                };

                stream = new MemoryStream(file.FileData);


                return new FileStreamResult(stream, "application/octet-stream")
                {
                    FileDownloadName = file.FileName
                };
            }



                return null;

            }
        }
}
