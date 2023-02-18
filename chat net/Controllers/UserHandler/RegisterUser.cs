using chat_net.models;
using chat_net.services.SQL;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace chat_net.Controllers.UserHandler
{
    public class RegisterUser : Controller
    {
        [HttpPost("register-user")]
        public User Index(User newUser)
        {
            string query = $"INSERT INTO users (name, username, password, image) VALUES ('{newUser.name}','{newUser.username}', '{newUser.password}', '{newUser.image}');";
            SQLConnection.ExecuteNonQueryStatement(query);
            return newUser;
        }

     
    }
}
