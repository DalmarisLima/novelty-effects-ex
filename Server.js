var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs')
var uuid = require('uuid');


app.use(express.static("webapp"));

app.get('/', function (req, res) {
    res.redirect('/');
});

// Parses the body for POST, PUT, DELETE, etc.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/save-response', function (req, res, next) {

    //generates a random id for the participant's response
    var respId = uuid.v1()

    //data to be saved (participant's response)
    var row = [respId,
        req.body.startTime,
        req.body.endTime,
        req.body.gender,
        req.body.age,
        req.body.testType,
        req.body.flowPreTestPoints,
        req.body.anxietyPreTestPoints,
        req.body.activityPoints,
        req.body.anxietyPostTestPoints,
        req.body.flowPostTestPoints,
        req.body.anxietyPre,
        req.body.anxietyPost,
        req.body.flowPre,
        req.body.flowPost].join(";") + "\n"

    fs.stat('responses.csv', function (err, stat) {
        if (err == null) {
            //write the actual data and end with newline
            fs.appendFile('responses.csv', row, function (err) {
                if (err) throw err;
                console.log('The response was saved!');
            });
        }
        else {
            //write the headers and newline
            console.log('First answer, adding headers');
            var headers = [
                "responseId",
                "startTime",
                "endTime",
                "gender",
                "age",
                "testType",
                "flowPre",
                "anxietyPre",
                "activityPoints",
                "anxietyPost",
                "flowPost",
                "anxietyRawPre",
                "anxietyRawPost",
                "flowRawPre",
                "flowRawPost"].join(";") + "\n" + row

            fs.writeFile('responses.csv', headers, function (err) {
                if (err) throw err;
                console.log('Response saved!');
            });
        }
    });

    res.end()

});

app.listen(8225, 'localhost');
console.log("This project is listening on port 8080");
