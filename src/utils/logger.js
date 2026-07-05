const config = require("../config");
const { embed } = require("./embeds");
async function log(guild, message) {
  if (!config.channels.logs) return;
  const channel = guild.channels.cache.get(config.channels.logs);
  if (channel) channel.send({ embeds: [embed("📝 Log", message)] }).catch(() => {});
}
module.exports = { log };
