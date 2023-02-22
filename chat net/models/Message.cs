using Npgsql;
using System.Diagnostics;

namespace chat_net.models
{
    public class Message
    {


        public string id { get; set; } = "";
        public string sender { get; set; } = "";
        public string receiver { get; set; } = "";
        public string message { get; set; } = "";
        public DateTime timestamp { get; set; } = DateTime.Now;
        public string type { get; set; } = "";

        internal static List<Message> GetListFromReader(NpgsqlDataReader reader)
        {
            List<Message> messages = new List<Message>();

            Debug.WriteLine($"messages:: {reader.HasRows}");


            while (reader.Read())
            {



                messages.Add(new Message
                {
                    id = reader["id"].ToString(),
                    sender = reader["sender_id"].ToString(),
                    receiver = reader["receiver_id"].ToString(),
                    message = reader["content"].ToString(),
                    timestamp = DateTime.Parse(reader["timestamp"].ToString()),
                    type = reader["type"].ToString()
                });
            }

            return messages;
        }
    }
}
