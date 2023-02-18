using chat_net.models;
using chat_net.services.SQL.UserHandler;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace chat_net.Controllers.MessageHandler
{
    public class MessagesController : Controller
    {
        [HttpGet("/get-messages/{userID}")]
        public List<Message> Index(string UserID)
        {
            return FriendsService.GetMessages(UserID);
        }

        [HttpPost("/send-message")]
        public void SendMessage(Message newMessage)
        {
            FriendsService.InsertMessage(newMessage);
        }

    }
}
