define(['services/datacontext', 'signalr', '/signalr/hubs'],
    function (datacontext, signalr, theHub) {

        function activate() {
            connctHub();
        }

        function connctHub() {
            $.connection.hub.url = "http://localhost:52556/signalr";
            // Declare a proxy to reference the hub.
            var gameMove = $.connection.TicTacToeHub;
            // Create a function that the hub can call to broadcast messages.
            gameMove.client.play = function (position, value) {
                // Add the message to the page.
                //$('#phonestatus').text(message);
            };

            // Start the connection.
            $.connection.hub.start().
                done(function () { console.log('Now connected, connection ID=' + $.connection.TicTacToeHub.connection.id); })
               .fail(function () { console.log('Could not connect'); });
        }
        var vm = {
            activate: activate,

        };
        return vm;

    });