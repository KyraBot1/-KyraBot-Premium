const { SlashCommandBuilder, ChannelType, PermissionFlagsBits, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const config = require("../../config");
const { embed } = require("../../utils/embeds");
const { log } = require("../../utils/logger");
module.exports = { data: new SlashCommandBuilder().setName("ticket").setDescription("Ouvre un ticket privé."), async execute(interaction) {
  const existing = interaction.guild.channels.cache.find(c => c.name === `ticket-${interaction.user.username.toLowerCase()}`);
  if (existing) return interaction.reply({ content: `Tu as déjà un ticket : ${existing}`, ephemeral: true });
  const overwrites = [{ id: interaction.guild.id, deny: [PermissionFlagsBits.ViewChannel] }, { id: interaction.user.id, allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.ReadMessageHistory] }];
  if (config.roles.staff) overwrites.push({ id: config.roles.staff, allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.ReadMessageHistory] });
  const channel = await interaction.guild.channels.create({ name: `ticket-${interaction.user.username}`, type: ChannelType.GuildText, parent: config.channels.tickets || null, permissionOverwrites: overwrites });
  const row = new ActionRowBuilder().addComponents(new ButtonBuilder().setCustomId("close_ticket").setLabel("Fermer").setEmoji("🔒").setStyle(ButtonStyle.Danger));
  await channel.send({ content: `${interaction.user}`, embeds: [embed("🎫 Ticket ouvert", "Explique ton problème ici. Le staff va te répondre dès que possible.")], components: [row] });
  await log(interaction.guild, `${interaction.user.tag} a ouvert un ticket.`);
  await interaction.reply({ content: `Ticket créé : ${channel}`, ephemeral: true });
}};