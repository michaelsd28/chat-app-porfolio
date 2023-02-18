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
        public Task<bool> UploadFile()
        {
            //Variable que retorna el valor del resultado del metodo
            //El valor predeterminado es Falso (false)
            bool resultado = false;

            //La variable "file" recibe el archivo en el objeto Request.Form
            //Del POST que realiza la aplicacion a este servicio.
            //Se envia un formulario completo donde uno de los valores es el archivo
            IFormFile file = Request.Form.Files[0];

     

    



            //Se valida si la variable "file" tiene algun archivo
            if (file.Length > 0)
            {
                //Se declara en esta variable el nombre del archivo cargado
                string NombreArchivo = file.FileName;

                //Se declara en esta variable la ruta completa con el nombre del archivo
                string RutaFullCompleta = Path.Combine( NombreArchivo);

                //Se crea una variable FileStream para carlo en la ruta definida
                using (var stream = new FileStream(RutaFullCompleta, FileMode.Create))
                {
                    file.CopyTo(stream);

                    //Como se cargo correctamente el archivo
                    //la variable "resultado" llena el valor "true"

         




                    resultado = true;
                }

                byte[] bytes = System.IO.File.ReadAllBytes(RutaFullCompleta);

                FileService.SaveFile(new SQLFile() { FileName = NombreArchivo, FileData = bytes });

            }

            //Se retorna la variable "resultado" como resultado de una tarea
            return Task.FromResult(resultado);

        }

    }
}
