using Npgsql;
using System.Diagnostics;

namespace chat_net.models
{
    public class User
    {

        public string id { get; set; } = "";
        public string name { get; set; } = "";
        public string username { get; set; } = "";
        public string? password { get; set; }
        public string image { get; set; } = "";
        public List<FriendUser> friends { get; set; } = new List<FriendUser>();

        internal static User? GetUserFromReader(NpgsqlDataReader reader)
        {
            User user = new User();

            Debug.WriteLine($"reader.HasRows:: {reader.HasRows}");

            if (reader.HasRows == false)
                return null;

            while (reader.Read())
            {
                user.id = reader["id"].ToString();
                user.name = reader["name"].ToString();
                user.username = reader["username"].ToString();
                user.image = reader["image"].ToString();
            }

       
            return user;

        }

   


    }
}
