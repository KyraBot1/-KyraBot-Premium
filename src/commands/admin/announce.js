const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
const { embed } = require("../../utils/embeds");
const { log } = require("../../utils/logger");
module.exports = { data: new SlashCommandBuilder().setName("announce").setDescription("Envoie une annonce en embed.").addStringOption(o => o.setName("message").setDescription("Message").setRequired(true)).setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages), async execute(interaction) {
  const message = interaction.options.getString("message");
  await interaction.channel.send({ embeds: [embed("📢 Annonce", message)] });
  await log(interaction.guild, `${interaction.user.tag} a envoyé une annonce.`);
  await interaction.reply({ content: "Annonce envoyée ✅", ephemeral: true });
}};