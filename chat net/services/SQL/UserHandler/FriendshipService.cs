using chat_net.models;
using Npgsql;
using System.Collections.Generic;
using System.Security.Cryptography.X509Certificates;

namespace chat_net.services.SQL.UserHandler
{
    public class FriendshipService
    {

        public static List<FriendUser> AddFriendship(string userID, string friendID)
        {
            try
            {
                string query = $@"INSERT INTO Friendship(user_id, friend_id) VALUES('{userID}', '{friendID}'), ('{friendID}', '{userID}'); ";

                using var connection = SQLConnection.GetConnection();


                using var cmd = new NpgsqlCommand(query, connection);


                using NpgsqlDataReader reader = cmd.ExecuteReader();

                connection.Close();


                return FriendsService.GetFriendList(userID);
            }
            catch
            {
                return new List<FriendUser>();
            }


        }
        public static bool RemoveFriendShip(string userID, string friendID) {


            try {
       
                string query = $@"DELETE FROM public.friendship  WHERE user_id = '{userID}' AND friend_id = '{friendID}' OR user_id = '{friendID}' AND friend_id = '{userID}' ;";

                using var connection = SQLConnection.GetConnection();

                var cmd = new NpgsqlCommand(query, connection);

                cmd.ExecuteNonQuery();




                return true;
            } catch {
             
                return false;
            }



        
        
        
        
        
        }
    }
}
