const { EmbedBuilder } = require("discord.js");
const config = require("../config");
function embed(title, description) {
  return new EmbedBuilder().setColor(config.color).setTitle(title).setDescription(description).setFooter({ text: "KyraBot Premium 🌷" }).setTimestamp();
}
module.exports = { embed };
