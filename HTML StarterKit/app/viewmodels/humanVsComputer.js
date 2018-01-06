define(['plugins/http', 'durandal/app', 'knockout'], function (http, app, ko) {
    return {
        displayName: 'Human vs Computer',
        description: 'The Player will play against skynet',

        connctHub: function () {
            $.connection.hub.url = "http://localhost:52556/signalr";
            // Declare a proxy to reference the hub.
            var gameMove = $.connection.TicTacToeHub;
            // Create a function that the hub can call to broadcast messages.
            gameMove.client.play = function (position, value) {
                // Add the message to the page.
                $('#A1').text(position);
            };

            // Start the connection.
            $.connection.hub.start().
                done(function () { console.log('Now connected, connection ID=' + $.connection.TicTacToeHub.connection.id); })
               .fail(function () { console.log('Could not connect'); });
        },

        canDeactivate: function () {
            //the router's activator calls this function to see if it can leave the screen
            return app.showMessage('Are you sure you want to quit this game?', 'Navigate', ['Yes', 'No']);
        }
    }

});