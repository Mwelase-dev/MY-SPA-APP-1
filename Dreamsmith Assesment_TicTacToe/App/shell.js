define(['durandal/app', 'plugins/router', 'knockout', 'datacontext', 'bootstrap', 'toastr'], function (app, router, ko, dtx, bootstrap, toaster) {

    function activate() {
        myRoute();
        return;
    }

    var myRoute = function () {
        return router.map([
            { route: ['', 'view_home'], moduleId: 'viewmodels/view_home', title: 'Home', nav: false, type: 'intro' }

        ]).buildNavigationModel()
            .mapUnknownRoutes('#', 'not-found')
            .activate();
    };


    var vm = {
        activate: activate,
        router: router,
    };
    return vm;
});