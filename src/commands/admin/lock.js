const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
const { embed } = require("../../utils/embeds");
const { log } = require("../../utils/logger");
module.exports = { data: new SlashCommandBuilder().setName("lock").setDescription("Verrouille le salon.").setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels), async execute(interaction) {
  await interaction.channel.permissionOverwrites.edit(interaction.guild.id, { SendMessages: false });
  await log(interaction.guild, `${interaction.user.tag} a verrouillé ${interaction.channel}.`);
  await interaction.reply({ embeds: [embed("🔒 Salon verrouillé", "Les membres ne peuvent plus écrire ici.")] });
}};