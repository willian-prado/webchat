const rescue = require('express-rescue');
const model = require('../models');

module.exports.getAllMessages = rescue(async (_req, res, _next) => {
  const messages = await model.getAllMessages();
  const formatMessages = messages.map(({ message, nickname, timestamp }) => (
    `${timestamp} - ${nickname}: ${message}`
  ));
  return res.status(200).render('index', { formatMessages });
});