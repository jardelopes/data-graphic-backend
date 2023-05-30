const express = require('express');
const conn = require('./db/conn');
const bodyParser = require('body-parser');
const participantRoutes = require('./routes/participantRoutes');
const cors = require('cors');
const app = express();
const PORT = 3000; 

app.use(cors());
app.use(bodyParser.json());
conn();
app.use('/api', participantRoutes);

app.listen(PORT, () => {
  console.log(`Servirdor rodando na porta: ${PORT}`);
});