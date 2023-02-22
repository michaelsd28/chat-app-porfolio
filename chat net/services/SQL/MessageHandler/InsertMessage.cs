using chat_net.models;
using Npgsql;
using System.Diagnostics;

namespace chat_net.services.SQL.MessageHandler
{
    public class InsertMessage
    {
        public static void Insert(Message message)
        {
            try
            {
                
                string query = $@"INSERT INTO Message ( sender_id, receiver_id, content,type ) 
                                    VALUES ( '{message.sender}', '{message.receiver}', '{message.message}', '{message.type}' );";



                using var connection = SQLConnection.GetConnection();
                using var cmd = new NpgsqlCommand(query, connection);
                 cmd.ExecuteReader();
                connection.Close();

                
      
            } catch (Exception ex) {

                Debug.WriteLine($"UpdateUser:: ex:: {ex}");
                

            }
          
        }
    }
}
