var tutorServices = angular.module("tutor.services", []);

tutorServices.service("configService", function () {

 


    var next = false;

    var badgeFlags = [false, false, false];
 
    this.setTheme = function (value) {
        console.log("setting theme: " + value);
        currentTheme = value;
    };

    this.getTheme = function () {
        return currentTheme;
    };

    this.setNext = function (value) {
        next = value;
    };

    this.getNext = function () {
        return next;
    };

    this.addBadge = function (id) {
        badgeFlags[id] = true;
    };

    this.getBadges = function () {
        return badgeFlags;
    };

});

tutorServices.service("User", function ($http) {
    var resp = {
        startTime: 0,
        endTime: 0,
        gender: "",
        age: "",
        testType: "",
        flowPreTestPoints: 0,
        anxietyPreTestPoints: 0,
        activityPoints: 0,
        anxietyPostTestPoints: 0,
        flowPostTestPoints: 0,
        flowPre: [],
        flowPost: [],
        anxietyPre: [],
        anxietyPost: []
    };

    this.setGender = function (value) {
        resp.gender = value;    
    };

    this.setAge = function (value) {
        resp.age = value;
    };

    this.setTestType = function (value) {
        resp.testType = value;
    };

    this.setFlowPretestPoints = function (value) {
        resp.flowPreTestPoints = value;
    };

    this.setAnxietyPretestPoints = function (value) {
        resp.anxietyPreTestPoints = value;
    };

    this.setAnxietyPosttestPoints = function (value) {
        resp.anxietyPostTestPoints = value;
    };

    this.setFlowPostTestPoints = function (value) {
        resp.flowPostTestPoints = value;
    };

    this.setActivityPoints = function (value) {
        resp.activityPoints = value;
    };

    this.getResponse = function () {
        return resp;
    };

    this.getFlow = function () {
        return resp.setFlowPostTestPoints;
    };

    this.getAnxiety = function () {
        return resp.anxietyPostTestPoints;
    };

    this.setFlowPre = function (value) {
        resp.flowPre = value;
    };

    this.setAnxietyPre = function (value) {
        resp.anxietyPre = value;
    };

    this.setAnxietyPost = function (value) {
        resp.anxietyPost = value;
    };

    this.setFlowPost = function (value) {
        resp.flowPost = value;
    };

    this.setStartTime = function (value) {
        resp.startTime = value;
    };

    this.setEndTime = function (value) {
        resp.endTime = value;
    };

    this.save = function () {
        $http({
            url: "http://localhost:8080/save-response",
            dataType: "json",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            data: resp
        }).then(function (response) {
            // success
            console.log("response sent!");

        }, function (response) {
            // failed
            console.error("Failed to submit participant response. " + response);
        });
    };

});
