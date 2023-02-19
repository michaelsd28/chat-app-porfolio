using chat_net.models;
using chat_net.services.SQL.Authentication;
using Npgsql;
using System.Diagnostics;

namespace chat_net.services.SQL.UserHandler
{
    public class LoginUserService
    {
        
        public static User? Login(LoginRequest userLogin)
        {
            User? user = new User();
            try {
                
        

                string query = $@"SELECT * FROM users WHERE username = '{userLogin.Username}' AND password = '{userLogin.Password}'";

                var connection = SQLConnection.GetConnection();

                var cmd = new NpgsqlCommand(query, connection);

                var reader = cmd.ExecuteReader();

             
                
                user = User.GetUserFromReader(reader);

                connection.Close();



     

                if (user != null)
                {
                    user.friends = FriendsService.GetFriendList(user.id);
                }
               

                return user;


            } catch (Exception ex) {

                Debug.WriteLine($"LoginUserService:: {ex}");

                return null;
            }


            

         
          
        }
    }
}
