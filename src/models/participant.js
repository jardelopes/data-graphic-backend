const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  participation: { type: Number, required: true },
});

module.exports = mongoose.model('Participant', participantSchema);