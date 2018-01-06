using Dreamsmith_Assesment_TicTacToe.Hubs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using TicTacToeGameLogic;

namespace Dreamsmith_Assesment_TicTacToe.Controllers
{
    public class TicTacToeController : ApiController
    {
        [HttpGet]
        public HttpResponseMessage PlayTicTacTocPostion(string id)
        {
            ActivateHub("position", "value");
            return new HttpResponseMessage() { Content = new StringContent(UoWPlay.Play(), Encoding.UTF8) };
        }

        #region Signal R
        private static void ActivateHub(string position, string value)
        {
            var hub = new TicTacToeHub();
            hub.Play(position, value);
        }
        #endregion
    }
}
