using Npgsql;

namespace chat_net.models
{
    public class FriendUser
    {

        public string id { get; set; } = "";
        public string name { get; set; } = "";
        public string username { get; set; } = "";
        public string image { get; set; } = "";
        public List<Message> messages { get; set; } = new List<Message>();


        public static void FillFriendsFromReader(NpgsqlDataReader reader, List<FriendUser> friends)
        {
            while (reader.Read())
            {
                FriendUser user = new FriendUser
                {
                    id = reader["id"].ToString(),
                    name = reader["name"].ToString(),
                    username = reader["username"].ToString(),
                    image = reader["image"].ToString()
                };
                friends.Add(user);

            }

        }

        internal static List<FriendUser> GetListFromReader(NpgsqlDataReader reader)
        {
            List<FriendUser> users = new List<FriendUser>();
            while (reader.Read())
            {
                FriendUser user = new FriendUser
                {
                    id = reader["id"].ToString(),
                    name = reader["name"].ToString(),
                    username = reader["username"].ToString(),
                    image = reader["image"].ToString()
                };
                users.Add(user);

            }
            return users;

        }
    }
    }

