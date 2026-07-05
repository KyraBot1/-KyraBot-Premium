const { SlashCommandBuilder } = require("discord.js");
const { embed } = require("../../utils/embeds");
module.exports = { data: new SlashCommandBuilder().setName("userinfo").setDescription("Affiche les informations d'un membre.").addUserOption(o => o.setName("membre").setDescription("Membre").setRequired(false)), async execute(interaction) {
  const user = interaction.options.getUser("membre") || interaction.user;
  const member = await interaction.guild.members.fetch(user.id).catch(() => null);
  await interaction.reply({ embeds: [embed(`👤 ${user.username}`, `🆔 ID : \`${user.id}\`\n📅 Compte créé : <t:${Math.floor(user.createdTimestamp / 1000)}:D>\n` + (member ? `🌷 A rejoint : <t:${Math.floor(member.joinedTimestamp / 1000)}:D>` : "")).setThumbnail(user.displayAvatarURL({ dynamic: true }))] });
}};