const { Events, ActivityType } = require("discord.js");
module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    console.log(`KyraBot connecté: ${client.user.tag} 🌷`);
    client.user.setPresence({ activities: [{ name: "Kyra's World 🌷", type: ActivityType.Watching }], status: "online" });
  }
};
