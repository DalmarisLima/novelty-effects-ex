angular.module('tutor').controller("AvatarCtrl", function($scope, $mdDialog, configService) {
    $scope.getImage = function(value) {
        return "assets/default/images/avatar" + value + ".png";
    };

    $scope.setAvatar = function(value) {
        configService.setAvatar(value);
    };

    $scope.close = function() {
        $mdDialog.hide();
    };
});
