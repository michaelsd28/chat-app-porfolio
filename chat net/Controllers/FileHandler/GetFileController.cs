using chat_net.models;
using chat_net.services.SQL;
using chat_net.services.SQL.FileHandler;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlTypes;
using System.IO;

namespace chat_net.Controllers.FileHandler
{

    public class GetFileController : Controller
    {
        [HttpGet("get-file/{fileID}")]
        public FileStreamResult? GetFile(string fileID )
        {

        

    
            return FileService.GetFile(fileID); 



        }

 
    }
}

