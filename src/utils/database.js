async function connectToDatabase(dataName) {
  // lógica de conexão
  console.log(`conectado ao Banco ${dataName}`);
}

async function disconnectDatabase() {
  // lógica de desconexão
  console.log("desconectado do Banco de dados");
}

export { connectToDatabase, disconnectDatabase };

// module.exports = {
//   connectToDatabase,
//   disconnectDatabase,
// };
