using chat_net.Controllers.UserHandler;
using chat_net.models;
using chat_net.services.WebsocketService;
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
                    Debug.WriteLine($"socket.OnMessage = message => {message} ----");
                    try
                    {
                  
                        WebsocketService.HandleLoginUser(message,socketList, socket);
                        WebsocketService. HandleIncommingMessage(socketList, message);

                 
                    }
                    catch (Exception ex)
                    {

                        Debug.WriteLine($"websocket:: ex:: {ex}");
                    }


                };
            });
            app.Run();
        }

      

   
    }
}