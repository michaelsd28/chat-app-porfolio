using chat_net.Controllers.UserHandler;
using chat_net.models;
using Fleck;
using System.Diagnostics;
using System.Net.Sockets;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace chat_net
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // allow cords for 3000

            var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

            builder.Services.AddCors(options =>
            {
                options.AddPolicy(name: MyAllowSpecificOrigins,
                                  policy =>
                                  {
                                      policy.WithOrigins("http://localhost:3000").AllowAnyHeader().AllowAnyMethod();
                                  });
            });


            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.UseCors(MyAllowSpecificOrigins);

            var server = new WebSocketServer("ws://127.0.0.1:5001");
            var socketList = new Dictionary<string, IWebSocketConnection>();

            server.Start(socket =>
            {
                socket.OnOpen = () =>
                {
                    //socketList[socket.ConnectionInfo.Id.ToString()] = socket;
                    Debug.WriteLine($"openned connection {socket.ConnectionInfo.Id}");
                    
            

                };
                socket.OnClose = () =>
                {
                    Debug.WriteLine("Close!");

                };
                socket.OnMessage = message =>
                {
                    try
                    {
                        Debug.WriteLine($"received:: {message}");
                        HandleLoginUser(message,socketList, socket);
                        HandleIncommingMessage(socketList, message);

                 
                    }
                    catch (Exception ex)
                    {

                        Debug.WriteLine($"websocket:: ex:: {ex}");
                    }


                };
            });
            app.Run();
        }

        private static void HandleIncommingMessage(Dictionary<string, IWebSocketConnection> socketList, string message)
        {

            try {

                Message? clientMessage = JsonSerializer.Deserialize<Message>(message);

                if (clientMessage != null)
                {

                    string receiver = clientMessage.receiver;
                    string sender = clientMessage.sender;

                    Debug.WriteLine($"receiver:: {receiver} * sender:: {sender}");

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

        private static void HandleLoginUser(string message, Dictionary<string, IWebSocketConnection> socketList, IWebSocketConnection clientSocket )
        {

            try {

            Dictionary<string, string>? credentials = JsonSerializer.Deserialize<Dictionary<string, string>>(message);

            Debug.WriteLine($"HandleLoginUser - - - credentials:: {credentials}");

            if (credentials != null) {
                string user = credentials["username"];
                socketList[user] = clientSocket;
                    return;
            }

            }
            catch {


                Debug.WriteLine("---- unable to Deserialize ----");

         
            }

        }
    }
}