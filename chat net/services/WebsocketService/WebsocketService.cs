using chat_net.models;
using chat_net.services.SQL.MessageHandler;
using Fleck;
using System.Diagnostics;
using System.Text.Json;

namespace chat_net.services.WebsocketService
{
    public class WebsocketService
    {
        public static void HandleIncommingMessage(Dictionary<string, IWebSocketConnection> socketList, string message)
        {

    

            try
            {

                Message? clientMessage = JsonSerializer.Deserialize<Message>(message);

                if (clientMessage != null)
                {
                    InsertMessage.Insert(clientMessage);
                    

                    string receiver = clientMessage.receiver;
                    string sender = clientMessage.sender;

             

                    if (socketList.ContainsKey(receiver))
                    {
                        socketList[receiver].Send(message);
                    }
                    else
                    {
                        Debug.WriteLine($"receiver not found {receiver}");
                    }



                }



            }
            catch (Exception ex)
            {

                Debug.WriteLine($"HandleIncomingMessage:: ex:: {ex}");

            }
        }

        public static void HandleLoginUser(string message, Dictionary<string, IWebSocketConnection> socketList, IWebSocketConnection clientSocket)
        {

            try
            {

                Dictionary<string, string>? credentials = JsonSerializer.Deserialize<Dictionary<string, string>>(message);

             

                if (credentials != null)
                {
                    string user = credentials["username"];
                    socketList[user] = clientSocket;
                    return;
                }

            }
            catch (Exception ex)
            {


                Debug.WriteLine($"---- unable to Deserialize ---- **** {ex}");



            }

        }
    }
}
