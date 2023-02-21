using chat_net.models;
using chat_net.services.SQL.UserHandler;
using Microsoft.AspNetCore.Mvc;

namespace chat_net.Controllers.UserHandler
{
    public class UpdateUserController : Controller
    {
        [HttpPut("update-user")]
        public object Index([FromBody] UpdateUser userUpdated)
        {
            
            try
            {

               User? user = UserService.updateUser(userUpdated);

                if (user == null)
                    return new { status = 400 };
                
                return user;
            }
            catch
            {
                return new { status = 400 };
            }
        }
    }
}
