angular.module('tutor').controller("FlowPosttestCtrl", function ($scope, $location, User) {

    $scope.questions = [
        "Estava muito claro para mim como eu estava me saindo na atividade",
        "Não estava preocupado com o que os outros podiam estar pensando de mim",
        "Minhas habilidades combinavam com o desafio da atividade que estava fazendo",
        "As coisas pareciam estar acontecendo automaticamente",
        "A forma como o tempo passou parecia ser diferente do normal5",
        "Eu sabia o que queria alcançar",
        "Tive uma sensação de total controle sobre o que estava fazendo",
        "A experiência me deixou com uma ótima sensação",
        "Estava completamente focado na tarefa em questão"];
    $scope.answers = [];

    $scope.processAnswers = function () {
        if ($scope.answers.length < 9) {
            $scope.msg = "Por favor, responda todas as perguntas!"
        } else {

            var time = new Date().getTime();

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
            console.log("ANXIETY POSTTEST: " + sum);

            function add(a, b) {
                return parseInt(a) + parseInt(b);
            }

            User.setFlowPostTestPoints(sum);
            User.setFlowPost(ans);
            User.setEndTime(time);
            User.save();

            $location.path("/finish");

        };
    }
});