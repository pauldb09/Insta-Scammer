const Server = require("./structures/Server");
const path = require("path")

const serv = new Server({
    port: 3000,
    allowedIps: [], // [] for all
    rateLimiteTimeout: 1000,
    maxRequestsPerSecond: 3,
    acceptMultipleIps: false,
})

serv.loadRoutes(path.join(__dirname, "routes"), {
    ignoreError: true,
    startOnLoaded: true,
})

serv.on("debug", (msg) => {
    console.log(msg);
})
serv.on("ready", () => {
    console.log("Server is ready");
})