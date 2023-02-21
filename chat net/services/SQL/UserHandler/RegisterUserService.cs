using chat_net.models;
using Npgsql;
using System.Diagnostics;

namespace chat_net.services.SQL.UserHandler
{
    public class RegisterUserService
    {
        internal static bool register(User newUser)
        {
            try
            {



                User? isRegister = UserService.GetData_username(username: newUser.username);



                if (isRegister == null)
                {

                    Debug.WriteLine($"registered:: ");

                    string query = $@"INSERT INTO users (name, username, password, image) VALUES ('{newUser.name}','{newUser.username}', '{newUser.password}', '{newUser.image}');";


                    using var connection = SQLConnection.GetConnection();


                    using var cmd = new NpgsqlCommand(query, connection);


                    using NpgsqlDataReader reader = cmd.ExecuteReader();



                    connection.Close();

                    return true;




                }
                else
                {

                    return true;

                }





            }
            catch
            {
                return false;
            }
        }


    }
}
