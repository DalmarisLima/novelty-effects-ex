angular.module("tutor").controller("FlowPretestCtrl", function ($scope, $location, configService, User, ) {   

    $scope.questions = [
        "Minhas habilidades combinam com o desafio que estou experimentando",
        "Realizo a atividade automaticamente sem pensar muito",
        "Sei o que quero alcança",
        "É muito claro para mim como estou me saindo na atividade",
        "Estou completamente focado na tarefa em questão",
        "Tenho um sentimento de total controle sobre o que estou fazendo",
        "Não estou preocupado com o que os outros podem estar pensando de mim",
        "A forma como o tempo passa parece ser diferente da normal",
        "A experiência é extremamente recompensadora",];
    $scope.answers = [];

    $scope.setTime = function () {
        var time = new Date().getTime();
        User.setStartTime(time);
    };

    $scope.processAnswers = function () {
        //console.log($scope.answers);
        //  validation
        if ($scope.answers.length < 9) {
            $scope.msg = "Por favor, responda todas as perguntas!"
        }
        else {
            function add(a, b) {
                return parseInt(a) + parseInt(b);
            };

            var ans = $scope.answers;
            console.log(ans);
            //invert positive answers
            ans[0] = 6 - ans[0];
            ans[1] = 6 - ans[1];
            ans[2] = 6 - ans[2];
            ans[3] = 6 - ans[3];
            ans[4] = 6 - ans[4];
            ans[5] = 6 - ans[5];
            ans[6] = 6 - ans[6];
            ans[7] = 6 - ans[7];
            ans[8] = 6 - ans[8];

            var sum = ans.reduce(add, 0);

            console.log(ans);
            console.log("flowPRETEST:" + sum)

        
            User.setFlowPretestPoints(sum);
            User.setFlowPre(ans);
            

            console.log(User.getResponse());
            $location.path("/familiarization")
        }

    }
});