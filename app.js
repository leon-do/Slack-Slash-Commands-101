var Slack = require('slack-node');
var express = require('express');
var url = require('url');
var app = express();
var request = require('request');


////////////// THE SETUP ///////////////////////////////////////////

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'))

app.get('/', function(request, response) {

    var urlObject = url.parse(request.url,true).query
    getUserCommand(urlObject);

}); //app.get


/////////////// GET USER COMMAND INFO //////////////////////////////////////////

function getUserCommand(urlObject){

    slack = new Slack();
    slack.setWebhook(urlObject.response_url);

    //   /mySlashCommand catfish    'catfish' is stored in var userCommand
    var userCommand = urlObject.text;

    request('http://rhymebrain.com/talk?function=getRhymes&word=' + userCommand, function (error, response, body) {

        slack.webhook({
         channel: urlObject.channel_name,
          text: "hello you typed: " + response[0]                   // the response back to slack
        }, function(err, response) {
            if (err){
                console.log(err)
            }

        })//webhook

    })//request

} //getUserCommand
