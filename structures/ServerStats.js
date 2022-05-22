const EventEmitter = require("events");

class ServerStats extends EventEmitter {
    constructor(options) {
        super();
        this.server = options.server
    }


}

module.exports = ServerStats;