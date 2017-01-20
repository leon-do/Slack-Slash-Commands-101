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




/////////////// THE SEND MESSAGE //////////////////////////////////////////


function getUserCommand(urlObject){

    slack = new Slack();
    slack.setWebhook(urlObject.response_url);

    //   /mySlashCommand catfish    'catfish' is stored in var userCommand
    var userCommand = urlObject.text;

    // API call
    request('http://rhymebrain.com/talk?function=getRhymes&word=' + userCommand, function (error, response, body) {

        var rhymeWord = JSON.parse(body)[0].word;

        slack.webhook({
         channel: urlObject.channel_name,
          text: "A word that rhymes is: " + rhymeWord                  // the response back to slack
        }, function(err, response) {
            if (err){
                console.log(err)
            }
        })//webhook

    })//request

} //getUserCommand
