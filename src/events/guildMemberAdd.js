const { Events } = require("discord.js");
const config = require("../config");
const { embed } = require("../utils/embeds");
const { log } = require("../utils/logger");

module.exports = {
  name: Events.GuildMemberAdd,
  async execute(member) {
    const memberRole = member.guild.roles.cache.get(config.roles.member);
    if (memberRole) await member.roles.add(memberRole).catch(() => {});
    const channel = member.guild.channels.cache.get(config.channels.welcome);
    if (channel) {
      const welcome = embed(`🌷 Welcome to ${config.serverName}`,
        `Hey ${member} 🤍\n\nBienvenue dans **${config.serverName}** !\n\n📜 Lis les règles\n✅ Vérifie-toi pour débloquer le serveur\n💬 Amuse-toi et respecte les autres\n\nLove,\n**KyraBot 🎀**`
      ).setThumbnail(member.user.displayAvatarURL({ dynamic: true }));
      await channel.send({ content: `${member}`, embeds: [welcome] }).catch(() => {});
    }
    await log(member.guild, `${member.user.tag} a rejoint le serveur.`);
  }
};
