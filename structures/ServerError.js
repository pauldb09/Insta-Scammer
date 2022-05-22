class ServerError extends Error {
    constructor(message) {
        super(message);
        this.name = "ServerError";
        throw new Error(message);
    }
}
module.exports = ServerError;