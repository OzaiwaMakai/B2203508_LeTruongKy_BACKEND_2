const app = require("./app");
const config = require("./app/config");
const aonfig = require("./app/config");

// start server
const PORT = config.app.port;
app.listen(PORT, () => {
    console.log(`Server is runniing on port ${PORT}.`);
});