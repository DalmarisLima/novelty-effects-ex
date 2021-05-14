angular.module('tutor').controller("FamiliarizationCtrl", function ($scope, $mdDialog, $location, configService, User) {
    console.log("FamiliarizationCtr ok");

    var opts = ["stnF", "stn1", "stn2"];
    var optsCount = opts.length;
    var random = Math.floor((Math.random() * optsCount)) %3;

    var answers = ['A', 'D', 'E', 'C', 'A'];
    var userAnswer = null;
    var totalPoints = 0;
    var currentQuestion = 0;
    var showSet1 = true;
    var totalPoints = 0;
    var userAvatar = "assets/default/images/avatar1.png";
    var level = 0;

    var inc = false;
    var dec = false;

    var bgColor = "white";



    var currentMessage = "Correto!"
    var flagMessage = false;

    var levelFiveFlag = true;
    var levelTenFlag = true;

    var users = [{
        name: "Alan",
        points: 19,
        avatar: "assets/default/images/ranking1.png"
    }, {
        name: "Valentine",
        points: 15,
        avatar: "assets/default/images/ranking2.png"
    }, {
        name: "Francis",
        points: 13,
        avatar: "assets/default/images/ranking3.png"
    }, {
        name: "Danni",
        points: 7,
        avatar: "assets/default/images/ranking4.png"
    }, {
        name: "Você",
        points: totalPoints,
        avatar: userAvatar
    }];



    $scope.badges = [];
    $scope.items = ['A', 'B', 'C', 'D', 'E'];
    $scope.progress = 0;

    $scope.number = 6;

    $scope.increment = false;
    $scope.decrement = false;

    $scope.showAvatar = true;

    $scope.showQuestions = true;

    $scope.getUserColor = function (name) {
        if (name == "Você")
            return "#e0e0e0";
        return "white";
    };
    $scope.getBgColor = function () {
        return bgColor;
    };

    $scope.hideAvatar = function () {
        $scope.showAvatar = false;
        $scope.showQuestions = true;
        updatePoints(0);
    };

    $scope.getUsers = function () {
        return users;
    };

    $scope.getImage = function (value) {
        return "assets/default/images/avatar" + value + ".png";
    };

    $scope.setAvatar = function (value) {
        userAvatar = value;
        users[4].avatar = value;
    };

    $scope.getNumber = function (num) {
        var array = new Array(num);
        for (var i = 0; i < num; i++) {
            array.push(i);
        };

        return array;
    };

    $scope.getBar = function () {
        return "assets/default/images/bar.png";

    };

    $scope.checkSet1 = function () {
        return showSet1;
    };


    $scope.checkAvatar = function () {
        return !$scope.showAvatar;
    };

    $scope.setSet1 = function (value) {
        showSet1 = value;
    };

    $scope.showNext = function () {
        return configService.getNext();
    };


    $scope.getStars = function () {

        if (configService.nextOn) {
            return "star";
        }

        return "star_border";
    };

    $scope.getRanking = function (value) {
        return users[value].avatar;

    };

    var checkBadge = function (index) {

        return configService.getBadges()[index];
    };


    $scope.getBadge = function (name) {

        var id = 0;

        switch (name) {
            case "badge5":
                id = 0;
                break;
            case "badge10":
                id = 1;
                break;
            case "badge":
                id = 2;
                break;
            default:
                console.log("invalid badge name");
        }


        var flag = checkBadge(id) ? name : "noBadge";

        //  console.log("flag: " + flag + " check: " + checkBadge(id));

        return "assets/default/images/" + flag + ".png";
    };

    $scope.getAvatar = function () {
        return userAvatar;
    };

    $scope.getLevel = function () {
        return level;
    };

    $scope.chooseAvatar = function () {
        $scope.showAvatar = false;
    };

    $scope.getPoints = function () {

        return totalPoints;
    };

    $scope.question = function () {
        return "assets/default/images/q-0.jpg";
    };


    var setCurrent = function setCurrent(index) {
        userAnswer = $scope.items[index];
    };

    $scope.getCurrent = function () {
        return Math.trunc(totalPoints / 10);
    };

    $scope.getQuestion = function () {
        return currentQuestion + 1;
    };

    $scope.getUserName = function (index) {
        return users[index].name;
    };

    $scope.getUserPoints = function (index) {

        return users[index].points;
    };

    var setMsgType = function (type) {

        if (type == "red") {
            currentMessage = "Resposta Errada"
        } else {
            currentMessage = "Resposta Certa"
        };
    };

    var playAnimation = function (type) {




        bgColor = type;
        flagMessage = true;

        setMsgType(type);

        setTimeout(function () {
            $scope.$apply(function () {
                bgColor = "white";
                flagMessage = false;
            });
        }, 2000);
    };

    var updatePoints = function (value) {

        if (value < 0 && (totalPoints + value) >= 0) {
            totalPoints += value;
            // dec = true;
            decrement = true;

        };

        if (value > 0) {
            console.log("right answer");
            totalPoints += value;
            level++;
            increment = true;

        };

        //updates ranking
        users = [{
            name: "Alan",
            points: 19,
            avatar: "assets/default/images/ranking1.png"
        }, {
            name: "Valentine",
            points: 15,
            avatar: "assets/default/images/ranking2.png"
        }, {
            name: "Francis",
            points: 13,
            avatar: "assets/default/images/ranking3.png"
        }, {
            name: "Danni",
            points: 7,
            avatar: "assets/default/images/ranking4.png"
        }, {
            name: "Você",
            points: totalPoints,
            avatar: userAvatar
        }];

        var sortedList = users.slice(0);
        sortedList.sort(function (a, b) {
            return a.points - b.points;
        });

        users = sortedList.reverse();

        setTimeout(function () {
            $scope.decrement = false;
            $scope.increment = false;
        }, 1000);


    };

    $scope.getMessage = function () {
        return currentMessage;
    };

    $scope.showMessage = function () {
        return flagMessage;
    }



    $scope.showPosttest = function () {
    
        if (random == 0) {
            $location.path("/stnF");
        }
        else if (random == 1) {
            $location.path("/stn1");
        }

        else if (random == 2){
            $location.path("/stn2")
        }
       
    };



    $scope.processAnswer = function (value) {
        setCurrent(value);
        var dialogType = null;

        //right answer
        if (userAnswer == answers[currentQuestion]) {

            updatePoints(1);
            playAnimation("green");

            //badge level 5
            if (totalPoints == 25 && levelFiveFlag) {
                levelFiveFlag = false;

                $mdDialog.show({
                    controller: 'Badge5Ctrl',
                    templateUrl: 'views/badge5.html',
                    parent: angular.element(document.body),
                    clickOutsideToClose: true,
                    fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
                });

                configService.addBadge(0);

                setTimeout(function () {
                    $mdDialog.hide();
                }, 2000000);


            } else if (totalPoints == 50 && levelTenFlag) {
                levelTenFlag = false;
                $mdDialog.show({
                    controller: 'Badge10Ctrl',
                    templateUrl: 'views/badge10.html',
                    parent: angular.element(document.body),
                    clickOutsideToClose: true,
                    fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
                });

                configService.addBadge(1);

                setTimeout(function () {
                    $mdDialog.hide();
                }, 20000000);


            } else if (currentQuestion == 4) {
                $mdDialog.show({
                    controller: 'BadgeCtrl',
                    templateUrl: 'views/badgeFami.html',
                    parent: angular.element(document.body),
                    clickOutsideToClose: true,
                    fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
                });

                configService.addBadge(2);

                setTimeout(function () {
                    $mdDialog.hide();
                }, 2500);
            };



        } else if (currentQuestion == 19) {

            playAnimation("red");
            $mdDialog.show({
                controller: 'BadgeCtrl',
                templateUrl: 'views/badge.html',
                parent: angular.element(document.body),
                clickOutsideToClose: true,
                fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
            });

            configService.addBadge(2);

            showSet1 = false;
            setTimeout(function () {
                $mdDialog.hide();
            }, 2500);
        } else {
            playAnimation("red");
            updatePoints(0)

        };

        currentQuestion++;
        $scope.progress = 100 * (currentQuestion + 1) / 5;
        $scope.question = function () {
            return "assets/default/images/q-" + currentQuestion + ".jpg";
        };

        if (currentQuestion >= 5) {
            configService.addBadge(2);

            //  configService.setNext(true);
            User.setActivityPoints(totalPoints);

            console.log(User.getResponse());
            console.log(userAnswer);//vamos ver
            //  $location.path("/home");
            showSet1 = false;

            $scope.showQuestions = false;
        };
        User.setTestType(opts[random]);
        console.log(random);
    };
});
