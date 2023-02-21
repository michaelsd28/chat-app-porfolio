using chat_net.models;
using chat_net.services.SQL;
using chat_net.services.SQL.UserHandler;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace chat_net.Controllers.UserHandler
{
    public class RegisterUser : Controller
    {
        [HttpPost("register-user")]
        public  object Index([FromBody] User newUser)
        {

            User? isHere = UserService.GetData_username(newUser.username);

            if (isHere != null) return new { status = "400", Message = "invalid user" };


            RegisterUserService.register(newUser);


            User? user = UserService.GetData_username(newUser.username);

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

