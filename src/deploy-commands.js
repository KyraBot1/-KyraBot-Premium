const { REST, Routes } = require("discord.js");
require("dotenv").config();
const { getCommandFiles } = require("./utils/files");

const commands = [];
for (const file of getCommandFiles()) {
  const command = require(file);
  if (command.data) commands.push(command.data.toJSON());
}

const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN);
(async () => {
  try {
    console.log("Déploiement des commandes slash...");
    await rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), { body: commands });
    console.log("Commandes slash installées ✅");
  } catch (error) { console.error(error); }
})();
