using Npgsql;

namespace chat_net.models
{
    public class Message
    {
        //    var sender: String = ""
        //var receiver: String = ""
        //var message: String = ""
        //var timestamp: String = ""
        //var type: String = ""

        public string id { get; set; } = "";
        public string sender { get; set; } = "";
        public string receiver { get; set; } = "";
        public string message { get; set; } = "";
        public DateTime timestamp { get; set; } = DateTime.Now;
        public string type { get; set; } = "";

        internal static List<Message> GetListFromReader(NpgsqlDataReader reader)
        {
            List<Message> messages = new List<Message>();

            while (reader.Read())
            {
                Message message = new Message();
                message.id = reader["id"].ToString();
                message.sender = reader["sender_id"].ToString();
                message.receiver = reader["receiver_id"].ToString();
                message.message = reader["message"].ToString();
                message.timestamp = DateTime.Parse(reader["date"].ToString());
                message.type = reader["type"].ToString();

                messages.Add(message);
            }

            return messages;
        }
    }
}
