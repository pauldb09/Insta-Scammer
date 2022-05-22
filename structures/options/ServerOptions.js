const ServerError = require("../ServerError");

class ServerOptions {
    constructor(options) {
        this.options = options;
        this.validated = this._validate();
        return { options, validated: this.validated };
    }

    _validate() {
        if (!this.options.port || isNaN(this.options.port)) return new ServerError("[ServerOptions] The port option is required and must be a valid port number.");
        console.log(typeof(this.options.allowedIps) == "object")
        if (typeof(this.options.allowedIps) !== "object") return new ServerError("[ServerOptions] The allowedIps option must be an array of allowed ips.");
        if (isNaN(this.options.rateLimiteTimeout)) return new ServerError("[ServerOptions] The rateLimiteTimeout option is required and must be a valid number.");
        if (isNaN(this.options.maxRequestsPerSecond)) return new ServerError("[ServerOptions] The maxRequestsPerSecond option is required and must be a valid number.");
        if (typeof(this.options.acceptMultipleIps) !== "boolean") return new ServerError("[ServerOptions] The acceptMultipleIps option is required and must be a boolean.");
        return true;
    }
}

module.exports = ServerOptions;