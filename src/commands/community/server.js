const { SlashCommandBuilder } = require("discord.js");
const { embed } = require("../../utils/embeds");
module.exports = { data: new SlashCommandBuilder().setName("server").setDescription("Affiche les informations du serveur."), async execute(interaction) {
  const guild = interaction.guild;
  await interaction.reply({ embeds: [embed(`🎉 ${guild.name}`, `👥 Membres : **${guild.memberCount}**\n👑 Owner : <@${guild.ownerId}>\n🌷 Bot : **KyraBot Premium**`).setThumbnail(guild.iconURL({ dynamic: true }))] });
}};