using chat_net.models;
using chat_net.services.SQL.UserHandler;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace chat_net.Controllers.UserHandler
{
    public class FetchUserController : Controller
    {
        [HttpGet("get-user/{userID}")]
        public object Index(string userID)
        {
            User? user = UserService.GetData(userID: userID);
  
            if (user != null)
            {
          
                return user;
            }
            else
            {

                return new { status = "400", Message = "invalid user" };
            }
        }


    }
}

