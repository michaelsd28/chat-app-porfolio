using chat_net.models;
using chat_net.services.SQL.FileHandler;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace chat_net.Controllers.FileHandler
{
    public class UploadFileController : Controller
    {
        [HttpPost("upload-file")]
        public string Index(SQLFile newFile)
        {

            return FileService.SaveFile(newFile);
        }

        [HttpPost("upload-file2")]
        public object UploadFile()
        {
            string? fileID = string.Empty;
            try
            {



                IFormFile file = Request.Form.Files[0];




                if (file.Length > 0)
                {

                    string FileName = file.FileName;


                    string fullRoute = Path.Combine(FileName);


                    using (var stream = new FileStream(fullRoute, FileMode.Create))
                    {
                        file.CopyTo(stream);

                    }

                    byte[] bytes = System.IO.File.ReadAllBytes(fullRoute);

                    fileID = FileService.SaveFile(new SQLFile() { FileName = FileName, FileData = bytes });

                    /// delete file after finished

                    System.IO.File.Delete(fullRoute);

                    if (fileID == null)
                    {
                        return new { status = 400 };
                    }

                }

                //Se retorna la variable "resultado" como resultado de una tarea
                return new
                {

                    id = fileID
                };

            }
            catch
            {


                return new { status = 400 };
            }

        }

    }
}
