const connection = require('./connection');

module.exports.createMessage = async (message) => {
  const db = await connection();
  await db.collection('messages').insertOne(message);
};