angular.module('tutor').controller("FinishCtrl", function ($scope, User) {

    $scope.populationAnxiety = 40.1 * 100 / 80;
    $scope.userAnxiety = User.getAnxiety() * 100 / 80;
    $scope.populationFlow = 40.1 * 100 / 80;
    $scope.userFlow = User.getFlow() * 100 / 80;
    User.save();
 
    $scope.share = function () {
        FB.ui({
            method: 'share',
            display: 'popup',
            href: 'https://weblab.nees.com.br/dalmaris/#/',
            title: 'Está Ansioso(a)?',
            description: 'Participe deste estudo sobre ansiedade e descubra!',
            picture: 'https://pixabay.com/static/uploads/photo/2016/02/07/14/51/hatena-1184896_960_720.png',
            layout: 'button'
        }, function (response) { });
    };

   

    console.log(User.userFlow);
});
