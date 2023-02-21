using chat_net.models;
using chat_net.services.SQL.UserHandler;
using Microsoft.AspNetCore.Mvc;

namespace chat_net.Controllers.UserHandler
{
    public class FriendController : Controller
    {

        [HttpGet("get-friends/{userID}")]
        public object GetFriends(string userID)
        {

            try
            {
                return FriendsService.GetFriendList(userID);

            }
            catch
            {


                return new { status = 400 };

            }



        }

        [HttpPost("add-friend/{userID}/{friendID}")]
        public object AddFriend(string userID, string friendID)
        {

            List<FriendUser> friendList = FriendshipService.AddFriendship(userID, friendID);

            if (friendList.Count == 0)
            {
                return new { status = 400 };
            }
            else
            {
                return friendList;
            }
        }

        [HttpPost("remove-friend/{userID}/{friendID}")]
        public object RemoveFriend(string userID, string friendID)
        {
            try
            {

                FriendshipService.RemoveFriendShip(userID, friendID);

                return new { status = 200 };

            }
            catch
            {



                return new { status = 400 };

            }

        }














    }
}
