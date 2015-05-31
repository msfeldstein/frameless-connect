## Connect your node app automatically to the Frameless iOS app, or any other full screen webpage viewer that connects to Framer Studio

If you have a node app or any other web server running on port 8080, use the following code to have Frameless automatically connect to it to save you from having to find and type in the URL.  This will broadcast the framerstudio bonjour advertisement with the port you supply.

`$ npm install frameless-connect --save-dev`

```
var bonjour = require('frameless-connect');
bonjour(8080);
```
