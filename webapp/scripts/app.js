angular.module("tutor", ["ngRoute", "ngResource", "ngAnimate", "ngMaterial", "ngCanvasGauge", "tutor.services"]).config(function ($routeProvider) {

    $routeProvider.
        when("/pretest", {
            templateUrl: "views/anxietypretest.html",
            controller: "AnxietyPretestCtrl"
        }).
        when("/flowpre", {
            templateUrl: "views/flowpretest.html",
            controller: "FlowPretestCtrl"
        }).
 
        when("/familiarization", {
            templateUrl: "views/familiarization.html",
            controller: "FamiliarizationCtrl"
        }).

        when("/stnF", {
            templateUrl: "views/stnF.html",
            controller: "HomeCtrl"
        }).
        when("/stn1",{
            templateUrl: "views/stn1.html",
            controller: "HomeCtrl"
        }).
        when("/stn2",{
            templateUrl: "views/stn2.html",
            controller: "HomeCtrl"
        }).
        when("/posttest", {
            templateUrl: "views/anxietyposttest.html",
            controller: "AnxietyPosttestCtrl"
        }).
        when("/flowpost", {
            templateUrl: "views/flowposttest.html",
            controller: "FlowPosttestCtrl"
        }).
        when("/finish", {
            templateUrl: "views/finish.html",
            controller: "FinishCtrl"
        }).
        otherwise({
            redirectTo: "/pretest"
        });

        

}).config(function ($mdThemingProvider) {

    $mdThemingProvider.alwaysWatchTheme(true);

    // Neutral Theme
    $mdThemingProvider.theme("default")
        .primaryPalette("blue-grey")
        .accentPalette("blue-grey")
        .warnPalette("blue-grey");

    // ST-F 
    $mdThemingProvider.theme("stFemale")
        .primaryPalette("purple")
        .accentPalette("purple")
        .warnPalette("purple");

    // ST-M 
    $mdThemingProvider.theme("stMale")
        .primaryPalette("blue")
        .accentPalette("blue")
        .warnPalette("blue");

});





//GLOBAL - FACEBOOK API
window.fbAsyncInit = function () {
    FB.init({
        appId: '259201801144935',
        xfbml: true,
        version: 'v2.8'
    });
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "libs/facebook/facebook.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
