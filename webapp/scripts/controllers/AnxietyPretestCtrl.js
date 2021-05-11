angular.module('tutor').controller("AnxietyPretestCtrl", function ($scope, $location, User) {


    $scope.questions = [
        "Sou calmo(a), ponderado(a) e senhor(a) de mim mesmo(a)",
        "Preocupo-me demais com coisas sem importância",
        "Sinto-me seguro(a)",
        "Fico tenso(a) e perturbado(a) quando penso em meus problemas do momento",
        "Sinto-me nervoso(a) e inquieto(a)",
        "Tomo decisões facilmente"];

    $scope.answers = [];


    $scope.processAnswers = function () {

        //console.log($scope.answers);
        //  validation
        if ($scope.answers.length < 6) {
            $scope.msg = "Por favor, responda todas as perguntas!"
        } else {
            function add(a, b) {
                return parseInt(a) + parseInt(b);
            };

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
            console.log("AnxietyPRETEST: " + sum);

           
            User.setAnxietyPretestPoints(sum);
            User.setAnxietyPre(ans);
            console.log(User.getResponse());
            $location.path("/flowpre");

        };

    };
});
