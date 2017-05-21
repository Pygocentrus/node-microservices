const logger = require('winston');
const seneca = require('seneca')();
const noop = () => {};


seneca.add('role: emails, cmd: send', (msg, respond = noop) => {
  const { result } = msg;
  logger.info(`Emails: Email sent with result=${result}`);
  respond(null, { status: 201 });
});


seneca.listen(3002);
