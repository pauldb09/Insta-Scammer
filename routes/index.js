const { Router } = require('express');
module.exports.Router = class Home extends Router {
        constructor() {
                super();
                this.get('/', async function(req, res) {
                            req.server.apiRes(res, { message: "Please use a valid route.", routes: `${req.server.routes.map(r=>`${r.name}`).join(" , ")}` }); 
        });
    }
};

module.exports.name = '/';