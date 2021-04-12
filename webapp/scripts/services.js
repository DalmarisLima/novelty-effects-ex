var tutorServices = angular.module("tutor.services", []);

tutorServices.service("configService", function() {

    var opts = ["default", "stMale", "stFemale"];

    var random = Math.floor((Math.random() * 123457)) % 3;
    var currentTheme = opts[random];
    // var currentTheme = "default";

    var next = false;

    var badgeFlags = [false, false, false];

    this.setTheme = function(value) {
        console.log("setting theme: " + value);
        currentTheme = value;
    };

    this.getTheme = function() {
        return currentTheme;
    };

    this.setNext = function(value) {
        next = value;
    };

    this.getNext = function() {
        return next;
    };

    this.addBadge = function(id) {
        badgeFlags[id] = true;
    };

    this.getBadges = function() {
        return badgeFlags;
    };

});

tutorServices.service("User", function($http) {
    var resp = {
        startTime: 0,
        endTime: 0,
        gender: "",
        age: "",
        testType: "",
        flowPretestPoints: 0,
        anxietyPretestPoints: 0,
        activityPoints: 0,
        posttestPoints: 0,
        flowPre: [],
        anxietyPre: [],
        post: []
    };

    this.setGender = function(value) {
        resp.gender = value;
    };

    this.setAge = function(value) {
        resp.age = value;
    };

    this.setTestType = function(value) {
        resp.testType = value;
    };

    this.setFlowPretestPoints = function(value) {
        resp.setFlowPretestPoints = value;
    };

    this.setAnxietyPretestPoints = function(value) {
        resp.anxietyPretestPoints = value;
    };

    this.setPosttestPoints = function(value) {
        resp.posttestPoints = value;
    };

    this.setActivityPoints = function(value) {
        resp.activityPoints = value;
    };

    this.getResponse = function() {
        return resp;
    };

    this.setFlow = function(){
        return resp.flowPretestPoints;
    };

    this.getAnxiety = function() {
        return resp.anxietyPretestPoints;
    };

    this.setFlowPre = function(value) {
        resp.flowPre = value;
    };

    this.setAnxietyPre = function(value) {
        resp.AnxyetyPre = value;
    };

    this.setPost = function(value) {
        resp.post = value;
    };

    this.setStartTime = function(value) {
        resp.startTime = value;
    };

    this.setEndTime = function(value) {
        resp.endTime = value;
    };

    this.save = function() {
        $http({
            url: "http://localhost:8080/save-response",
            dataType: "json",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            data: resp
        }).then(function(response) {
            // success
            console.log("response sent!");

        }, function(response) {
            // failed
            console.error("Failed to submit participant response. " + response);
        });
    };

});
