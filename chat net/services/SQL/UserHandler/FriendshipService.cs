using chat_net.models;
using Npgsql;
using System.Collections.Generic;
using System.Security.Cryptography.X509Certificates;

namespace chat_net.services.SQL.UserHandler
{
    public class FriendshipService
    {

        public static bool AddFriendship(string userID, string friendID)
        {
            try
            {
                string query = $@"INSERT INTO Friendship(user_id, friend_id) VALUES('{userID}', '{friendID}'), ('{friendID}', '{userID}'); ";

                using var connection = SQLConnection.GetConnection();


                using var cmd = new NpgsqlCommand(query, connection);


                using NpgsqlDataReader reader = cmd.ExecuteReader();

                connection.Close();


                return true;
            }
            catch
            {
                return false;
            }


        }
        public static bool RemoveFriendShip(string userID, string friendID) {


            try {
       
                string query = $@"DELETE FROM Friendship
                                                  WHERE user_id = {userID} AND friend_id = {friendID};";

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
