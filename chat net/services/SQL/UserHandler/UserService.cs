using chat_net.models;
using Npgsql;
using System.Diagnostics;

namespace chat_net.services.SQL.UserHandler
{
    public class UserService
    {

        public static User? updateUser(UpdateUser updateUser) { 


            User? user = null;

            try
            {
                string query = $@"UPDATE users SET name = '{updateUser.name}', image = '{updateUser.image}' WHERE id = '{updateUser.id}';";

                using var connection = SQLConnection.GetConnection();

                using var cmd = new NpgsqlCommand(query, connection);

                using NpgsqlDataReader reader = cmd.ExecuteReader();

                connection.Close();

                user = GetData(userID: updateUser.id);

                return user;
                

            } catch
            {
                return user;
            }
        

        
        
        }

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

                if (user == null)
                    return null;

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



        internal static User? GetData_username(string username)
        {
            User? user = new User();
            try
            {





                string query = $@"SELECT * FROM users WHERE username = '{username}';";



                var connection = SQLConnection.GetConnection();

                var cmd = new NpgsqlCommand(query, connection);

                var reader = cmd.ExecuteReader();



                user = User.GetUserFromReader(reader);

              

                
                connection.Close();

                if (user != null)

                {
                    user.friends = FriendsService.GetFriendList(user.id);
                    Debug.WriteLine("user is not null");
                    return user;
                } else {
                    Debug.WriteLine("null");
                    return null;
                }



    


            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex);
                return null;
            }
        }
    }
}


