const databaseType = {
    userType: "admin",
    typeData: "datalocal",
}


async function connectToDatabase(dataName) {
  // lógica de conexão
  console.log(`conectado ao Banco ${dataName}`);
}

async function disconnectDatabase() {
  // lógica de desconexão
  console.log("desconectado do Banco de dados");
}

export { connectToDatabase, disconnectDatabase, databaseType };

// module.exports = {
//   connectToDatabase,
//   disconnectDatabase,
// };
