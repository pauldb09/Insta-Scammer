# Api Template
A simple and beginner friendly api template built in nodejs and expressjs. Rate limite system included

# Installation

Downdload the files, install nodejs on your computer ( nodejs.org ) and run it with `node app.js`

If you need any help, join this server: [discord.gg/Q5QSbAHaXB](https://discord.gg/Q5QSbAHaXB)

# Configuration

You can customize the settings in the `config.js` in [the line 5](https://github.com/pauldb09/Api-Template/blob/7319f8fac84395106afa31cdd24b0475756b9c78/app.js#L4) .

For the rate limite system, 4 req/s is a good value depening on the use you want to make of this.

You can create new routes by creating a file in the `routes` folder. Example route: 
 
```js
const { Router } = require('express');
module.exports.Router = class Home extends Router {
    constructor() {
        super();
        this.get('/', async function(req, res) {
            res.status(200).send("Hello")
        });

        this.post('/', async function(req, res) {
            console.log("Got a post request");
        });
    }
};

module.exports.name = '/test';
```
