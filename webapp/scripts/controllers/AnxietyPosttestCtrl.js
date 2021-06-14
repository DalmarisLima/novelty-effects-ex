
angular.module('tutor').controller("AnxietyPosttestCtrl", function ($scope, $location, User) {

    $scope.questions = [
        "Sinto-me calmo(a)",
        "Estou tenso(a)",
        "Sinto-me à vontade",
        "Sinto-me nervoso(a)",
        "Estou descontraído(a)",
        "Estou preocupado(a)"];
    $scope.answers = [];

    $scope.processAnswers = function () {

        if ($scope.answers.length < 6) {
            $scope.msg = "Por favor, responda todas as perguntas!"
        } else {


            var ans = $scope.answers;
            console.log(ans);

            //invert positive answers
            ans[0] = 5 - ans[0];
            ans[1] = 5 - ans[1];
            ans[2] = 5 - ans[2];
            ans[3] = 5 - ans[3];
            ans[4] = 5 - ans[4];
            ans[5] = 5 - ans[5];

            var sum = ans.reduce(add, 0);

            console.log(ans);
            console.log("ANXIETY POSTTEST: " + sum);

            function add(a, b) {
                return parseInt(a) + parseInt(b);
            }
            User.setGender($scope.gender);
            User.setAge($scope.age);
            User.setAnxietyPosttestPoints(sum);
            User.setAnxietyPost(ans);

            $location.path("/flowpost");

        };
    }

});
