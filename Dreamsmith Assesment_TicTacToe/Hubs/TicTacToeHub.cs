using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using System.Threading.Tasks;

namespace Dreamsmith_Assesment_TicTacToe.Hubs
{
    public class TicTacToeHub : Hub
    {
        public void Play(string position, string value)
        {
            var hubContext = GlobalHost.ConnectionManager.GetHubContext<TicTacToeHub>();
            hubContext.Clients.All.addmessage();
        }

        public void BroadcastToGroup(string message, string group)
        {
            Clients.Group(group).newMessageReceived(message);
        }

        public Task JoinGroup(string groupName)
        {
            return Groups.Add(Context.ConnectionId, groupName);
        }

        public Task LeaveGroup(string groupName)
        {
            return Groups.Remove(Context.ConnectionId, groupName);
        }

        public override Task OnConnected()
        {
            return Clients.All.joined(GetAuthInfo());
        }

         

        protected object GetAuthInfo()
        {
            var user = Context.User;
            return new
            {
                IsAuthenticated = user.Identity.IsAuthenticated,
                IsAdmin = user.IsInRole("Admin"),
                UserName = user.Identity.Name

            };
        }
    }
}