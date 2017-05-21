const express = require('express');
const logger = require('winston');
const helmet = require('helmet');
const seneca = require('seneca')();

const app = express();
app.use(helmet());


seneca
  .client({ port: 3001, pin: 'role: notifications' })
  .client({ port: 3002, pin: 'role: emails' });


app.get('/', (req, res, next) => {
  logger.info('GET /', req.query);

  const { left = 2, right = 3 } = req.query;

  seneca.act({ role: 'notifications', cmd: 'process', left, right }, (err, data) => {
    res.status(200).json({ content: 'Hello World!', result: data.result });
    seneca.act({ role: 'emails', cmd: 'send', result: data.result });
  });
});


app.listen(3000, () => logger.info('[API] listening on port 3000!'));
