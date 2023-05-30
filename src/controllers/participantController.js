const Participant = require('../models/participant');

exports.getAllParticipants = async (req, res) => {
  try {
    const participants = await Participant.find();
    res.json(participants);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao ler participantes' });
  }
};

exports.createParticipant = async (req, res) => {
  try {
    const { firstName, lastName, participation } = req.body;
    const participant = await Participant.create({ firstName, lastName, participation });
    res.status(201).json(participant);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar participante' });
  }
};

exports.deleteParticipant = async (req, res) => {
    try {
      const { id } = req.params;
      const participant = await Participant.findByIdAndDelete(id);
      
      if (!participant) {
        return res.status(404).json({ error: 'Participante not found' });
      }
  
      res.json({ message: 'Participante deletado com sucesso' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar participante' });
    }
};