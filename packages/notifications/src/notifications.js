const _ = require('lodash');
const logger = require('winston');
const seneca = require('seneca')();


seneca.add('role: notifications, cmd: process', (msg, respond) => {
  const { left = 0, right = 0 } = msg;
  const sum = _.toNumber(left) + _.toNumber(right);

  logger.info(`Notifications: ${left} + ${right} = ${sum}`);

  respond(null, { result: sum });
});


seneca.listen(3001);
