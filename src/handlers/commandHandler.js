const { getCommandFiles } = require("../utils/files");
function loadCommands(client) {
  for (const file of getCommandFiles()) {
    const command = require(file);
    if (command.data && command.execute) client.commands.set(command.data.name, command);
  }
  console.log(`Commandes chargées: ${client.commands.size} ✅`);
}
module.exports = { loadCommands };
