const ServerError = require("../ServerError");

class RouteOptions {
    constructor(options, file) {
        this.options = options;
        this.validated = this._validate();
    }

    _validate() {
        if (this.options.ignoreError && typeof(this.options.ignoreError) !== "boolean") return new ServerError("[RouteOptions] The ignoreErrors option is required and must be a boolean.");
        if (this.options.startOnLoaded && typeof(this.options.startOnLoaded) !== "boolean") return new ServerError("[RouteOptions] The startOnLoaded option is required and must be a boolean.");
        return true;
    }
}

module.exports = RouteOptions;