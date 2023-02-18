using Npgsql;

namespace chat_net.models
{
    public class User
    {

        public string id { get; set; } = "";
        public string name { get; set; } = "";
        public string username { get; set; } = "";
        public string password { get; set; } = "";
        public string image { get; set; } = "";
        public List<FriendUser> friends { get; set; } = new List<FriendUser>();

        internal static User GetUserFromReader(NpgsqlDataReader reader)
        {
            User user = new User();
            while (reader.Read())
            {
                user.id = reader["id"].ToString();
                user.name = reader["name"].ToString();
                user.username = reader["username"].ToString();
                user.image = reader["image"].ToString();
            }
            return user;

        }

        /*
         command to create sql table id is auto increment for posgress and is primary key
        
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) ,
            username VARCHAR(255) ,
            password VARCHAR(255) ,
            image VARCHAR(255) ,
            friends VARCHAR(255) 
        );
        
         
         */


    }
}
