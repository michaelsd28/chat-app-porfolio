using chat_net.models;
using chat_net.services.SQL.UserHandler;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace chat_net.Controllers.UserHandler
{
    public class LoginUser : Controller
    {
        [HttpPost("login/")]
        public object Login([FromBody] LoginRequest loginUser)
        {
            User? isUserIn = LoginUserService.Login(loginUser);
            if (isUserIn != null)
            {

                return isUserIn;
            }
            else
            {
                //return 400
                return new { status = 400, message = "Bad Request" };
            }

        }


    }
}
