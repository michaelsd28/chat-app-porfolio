using chat_net.models;
using Npgsql;
using System.Diagnostics;

namespace chat_net.services.SQL.UserHandler
{
    public class UserService
    {

        public static User? GetData(string userID)
        {
            User? user = new User();
            try
            {



                string query = $@"SELECT * FROM users WHERE id = '{userID}';";

       
               
                var connection = SQLConnection.GetConnection();

                var cmd = new NpgsqlCommand(query, connection);

                var reader = cmd.ExecuteReader();



                user = User.GetUserFromReader(reader);

                connection.Close();



                user.friends = FriendsService.GetFriendList(user.id);
                return user;


            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex);
                return null;
            }
        }
    }
}


