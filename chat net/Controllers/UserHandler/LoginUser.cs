using chat_net.models;
using chat_net.services.SQL.UserHandler;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace chat_net.Controllers.UserHandler
{
    public class LoginUser : Controller
    {
        [HttpPost("login/")]
        public User? Index(LoginRequest loginUser)
        {
            User isUserIn = LoginUserService.Login(loginUser);
            if (isUserIn.username != "")
            {
                return isUserIn;
            }
            else
            {
                return null;
            }
        }
    
        
    }
}
