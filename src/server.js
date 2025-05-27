require('dotenv').config();
const app = require('./app');
const sequelize = require('./config/db');

const PORT = process.env.PORT || 3000;
//Teste comentario
sequelize.authenticate()
  .then(() => {
    console.log('Conectado ao PostgreSQL');
    app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));
  })
  .catch((err) => {
    console.error('Erro na conexão:', err);
  });

  