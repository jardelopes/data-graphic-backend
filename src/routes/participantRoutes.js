const express = require('express');
const participantController = require('../controllers/participantController');

const router = express.Router();

router.get('/participants', participantController.getAllParticipants);
router.post('/participants', participantController.createParticipant);
router.delete('/participants/:id', participantController.deleteParticipant);

module.exports = router;