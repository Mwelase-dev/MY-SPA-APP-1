define(['plugins/http', 'durandal/app', 'knockout'], function (http, app, ko) {
    return {
        displayName: 'Human vs Human',
        description: 'The Player will play against another player',

        canDeactivate: function () {
            //the router's activator calls this function to see if it can leave the screen
            return app.showMessage('Are you sure you want to quit this game?', 'Navigate', ['Yes', 'No']);
        }
    }
});