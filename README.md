1. Clone this repo: git@github.com:leon-do/Slack-Slash-Commands-101.git

2. Push this repo onto a server (example: heroku)

3. Copy YOUR server url: (example: http://foo-barrr-15071.herokuapp.com/)

4. Go to: https://api.slack.com/custom-integrations

5. Click: New /command

6. Click: Add Configuration

7. choose a command: /foobar 

8. choose method: GET

9. paste URL from step 3.

10. save integration

11. open slack and type: /foobar catfish

12. you should get a message that says "hello you typed: catfish"
