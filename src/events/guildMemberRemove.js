const { Events } = require("discord.js");
const config = require("../config");
const { embed } = require("../utils/embeds");
const { log } = require("../utils/logger");
module.exports = {
  name: Events.GuildMemberRemove,
  async execute(member) {
    const channel = member.guild.channels.cache.get(config.channels.goodbye);
    if (channel) await channel.send({ embeds: [embed("👋 Goodbye", `**${member.user.tag}** a quitté le serveur.`)] }).catch(() => {});
    await log(member.guild, `${member.user.tag} a quitté le serveur.`);
  }
};
