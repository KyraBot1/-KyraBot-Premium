const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
const { embed } = require("../../utils/embeds");
const { log } = require("../../utils/logger");
module.exports = { data: new SlashCommandBuilder().setName("unlock").setDescription("Déverrouille le salon.").setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels), async execute(interaction) {
  await interaction.channel.permissionOverwrites.edit(interaction.guild.id, { SendMessages: true });
  await log(interaction.guild, `${interaction.user.tag} a déverrouillé ${interaction.channel}.`);
  await interaction.reply({ embeds: [embed("🔓 Salon déverrouillé", "Les membres peuvent de nouveau écrire ici.")] });
}};