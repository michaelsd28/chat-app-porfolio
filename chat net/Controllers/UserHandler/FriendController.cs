using chat_net.models;
using chat_net.services.SQL.UserHandler;
using Microsoft.AspNetCore.Mvc;

namespace chat_net.Controllers.UserHandler
{
    public class FriendController : Controller
    {

        [HttpGet("get-friends/{userID}")]
        public List<FriendUser> GetFriends(string userID)
        {
       
            return  FriendsService.GetFriendList(userID);

        }

        [HttpPost("add-friend/{userID}/{friendID}")]
        public void AddFriend(string userID, string friendID)
        {
            FriendshipService.AddFriendship(userID, friendID);
        }

        [HttpPost("remove-friend/{userID}/{friendID}")]
        public void RemoveFriend(string userID, string friendID)
        {
            FriendshipService.RemoveFriendShip(userID, friendID);
        }














    }
}
