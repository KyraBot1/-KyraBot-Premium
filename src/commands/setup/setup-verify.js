const { SlashCommandBuilder, PermissionFlagsBits, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const config = require("../../config");
const { embed } = require("../../utils/embeds");
module.exports = {
  data: new SlashCommandBuilder().setName("setup-verify").setDescription("Crée le panneau de vérification.").setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  async execute(interaction) {
    const panel = embed("✅ Verification", `Bienvenue sur **${config.serverName}** 🌷\n\nClique sur le bouton ci-dessous pour recevoir le rôle **Verified** et accéder au serveur.\n\n🎀 Merci de respecter les règles.`);
    const row = new ActionRowBuilder().addComponents(new ButtonBuilder().setCustomId("verify_button").setLabel("Verify").setEmoji("✅").setStyle(ButtonStyle.Success));
    await interaction.channel.send({ embeds: [panel], components: [row] });
    await interaction.reply({ content: "Panneau de vérification envoyé ✅", ephemeral: true });
  }
};