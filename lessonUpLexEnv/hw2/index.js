'use strict';

const createLogger = () => {
  let memory = [];
  let warn = (text) => memory.unshift({ message: text, dateTime: new Date(), type: "warn" });


  let error = (text) => memory.unshift({ message: text, dateTime: new Date(), type: "error" });


  let log = (text) => memory.unshift({ message: text, dateTime: new Date(), type: "log" });

  let getRecords = (text) => {
    if (text == "warn") return memory.filter((obj) => obj.type == "warn");
    if (text == "error") return memory.filter((obj) => obj.type == "error");
    if (text == "log") return memory.filter((obj) => obj.type == "log");
    return memory;
  };
  let logger = {
    warn,
    error,
    log,
    memory,
    getRecords,
  };
  return logger;
};

// examples
const logger1 = createLogger();
logger1.log('User logged in');
logger1.warn('User is tring to ented restricted page');
logger1.log('User logged out');
logger1.error('Unexpected error on the site');

logger1.getRecords(); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
logger1.getRecords('log'); // ===> [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
logger1.getRecords('error'); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
logger1.getRecords('warn'); // ===> [{ message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }]

const logger2 = createLogger();
logger2.warn('Opps, something is happenning');
logger2.getRecords('error'); // ===> []
logger2.getRecords('warn'); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]
logger2.getRecords(); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]

const logger3 = createLogger();
logger3.getRecords('error'); // ===> []
logger3.getRecords(); // ===> []