using chat_net.models;
using Npgsql;
using System.Diagnostics;

namespace chat_net.services.SQL.UserHandler
{
    public class RegisterUserService
    {
        public bool Register(User newUser)
        {

            try
            {
                string query = $"INSERT INTO users (name, username, password, image) VALUES ('{newUser.name}','{newUser.username}', '{newUser.password}', '{newUser.image}');";
                SQLConnection.ExecuteNonQueryStatement(query);
                return true;
            }
            catch
            {
                return false;
            }








        }
    }
}
