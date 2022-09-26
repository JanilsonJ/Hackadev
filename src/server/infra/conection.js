const pgPromise = require("pg-promise")();

const db = pgPromise({
  connectionString:
    "postgres://jbmumepuutjhzz:c0e3d1594e650b39d60ebb061daef5eccfb89e509448d83a5876e2891546463a@ec2-44-209-158-64.compute-1.amazonaws.com:5432/daf2s6qvegh99a",
  ssl: {
    rejectUnauthorized: false,
  }
});

try {
  db.connect();
  console.log('Conexão com o banco realizda com sucesso!')
} catch (error) {
  console.log('Erro ao conectar ao banco.' + error)
}

module.exports = db;
