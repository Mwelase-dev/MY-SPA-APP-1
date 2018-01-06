define(['durandal/app'], function (app) {
    var ctor = function () {
        this.displayName = 'Tic-Tac-Toe Championship';
        this.description = 'Tic Tac Toe what a wonderfull game';
        this.rules = ['Be nice',
                    'Do not boast when you win'
        ]
    };

    return ctor;
});