using chat_net.models;
using Npgsql;
using System.Security.Cryptography.X509Certificates;

namespace chat_net.services.SQL.UserHandler
{
    public class FriendsService
    {
        

        public static List<FriendUser> GetFriendList(string userID)
        {

            try {
            string query = $@"SELECT u.id, u.name, u.username, u.image
                                                    FROM users u
                                                    INNER JOIN Friendship f ON u.id = f.friend_id
                                                    WHERE f.user_id = '{userID}';";


            using var connection = SQLConnection.GetConnection();



            using var cmd = new NpgsqlCommand(query, connection);



            using NpgsqlDataReader reader = cmd.ExecuteReader();

            List<FriendUser> users = FriendUser.GetListFromReader(reader);

            

                connection.Close();
            return users;
            }
            catch {

                return new List<FriendUser>();
            }
        }


        public static List<Message> GetMessages(string userID)
        {
            try
            {
                string query = $@"SELECT id, sender_id, receiver_id, content, timestamp
                                                    FROM Message
                                                    WHERE sender_id = '{userID}' OR receiver_id = '{userID}'
                                                    ORDER BY timestamp ASC;";

                using var connection = SQLConnection.GetConnection();

                using var cmd = new NpgsqlCommand(query, connection);

                using NpgsqlDataReader reader = cmd.ExecuteReader();

                List<Message> messages = Message.GetListFromReader(reader);

                connection.Close();

                return messages;
            }
            catch
            {
                return new List<Message>();
            }
        }
        public static bool InsertMessage(Message newMessage)
        {

            try
            {
                string query = $@"INSERT INTO Message(sender_id, receiver_id, content, type)
                                                    VALUES('{newMessage.sender}', '{newMessage.receiver}', '{newMessage.message}',    '{newMessage.type}');";

                using var connection = SQLConnection.GetConnection();

                using var cmd = new NpgsqlCommand(query, connection);

                cmd.ExecuteNonQuery();

                connection.Close();

                return true;
            }
            catch
            {
                return false;
            }




        }
    }
}


