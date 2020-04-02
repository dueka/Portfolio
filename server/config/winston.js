const appRoot = require("app-root-path");
const winston = require("./config/winston");

const options = {
  file: {
    level: "info",
    filename: `${appRoot}/logs/app.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5232880,
    maxFiles: 5,
    colorize: false
  },
  console: {
    level: "debug",
    handleExceptions: true,
    json: false,
    colorize: true,
    silent: process.env.NODE_ENV === "test"
  }
};

const logger = winstion.createLogger({
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.Console(options.console)
  ],
  exitOnError: false
});

logger.stream = {
  write(message, encoding) {
    logger.info(message, enconding);
  }
};

module.exports = logger;
