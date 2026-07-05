const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
const { log } = require("../../utils/logger");
module.exports = { data: new SlashCommandBuilder().setName("clear").setDescription("Supprime des messages.").addIntegerOption(o => o.setName("nombre").setDescription("1 à 100").setRequired(true)).setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages), async execute(interaction) {
  const amount = interaction.options.getInteger("nombre");
  if (amount < 1 || amount > 100) return interaction.reply({ content: "Choisis un nombre entre 1 et 100.", ephemeral: true });
  await interaction.channel.bulkDelete(amount, true).catch(() => {});
  await log(interaction.guild, `${interaction.user.tag} a supprimé ${amount} messages.`);
  await interaction.reply({ content: `${amount} messages supprimés ✅`, ephemeral: true });
}};