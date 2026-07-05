const { Events } = require("discord.js");
const config = require("../config");
const { log } = require("../utils/logger");

module.exports = {
  name: Events.InteractionCreate,
  async execute(interaction, client) {
    if (interaction.isButton()) {
      if (interaction.customId === "verify_button") {
        const role = interaction.guild.roles.cache.get(config.roles.verified);
        if (!role) return interaction.reply({ content: "Le rôle Verified n'est pas configuré.", ephemeral: true });
        await interaction.member.roles.add(role).catch(() => {});
        await interaction.reply({ content: "Tu es vérifié(e) ! Bienvenue dans le serveur 🌷", ephemeral: true });
        await log(interaction.guild, `${interaction.user.tag} s'est vérifié(e).`);
      }
      if (interaction.customId === "close_ticket") {
        await interaction.reply({ content: "Ticket fermé dans 3 secondes 🔒", ephemeral: true });
        setTimeout(() => interaction.channel.delete().catch(() => {}), 3000);
      }
      return;
    }
    if (!interaction.isChatInputCommand()) return;
    const command = client.commands.get(interaction.commandName);
    if (!command) return;
    try { await command.execute(interaction, client); }
    catch (error) {
      console.error(error);
      const content = "Une erreur est arrivée avec cette commande.";
      if (interaction.replied || interaction.deferred) await interaction.followUp({ content, ephemeral: true }).catch(() => {});
      else await interaction.reply({ content, ephemeral: true }).catch(() => {});
    }
  }
};
