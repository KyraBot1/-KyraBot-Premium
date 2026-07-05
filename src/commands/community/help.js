const { SlashCommandBuilder } = require("discord.js");
const { embed } = require("../../utils/embeds");
module.exports = { data: new SlashCommandBuilder().setName("help").setDescription("Affiche l'aide de KyraBot."), async execute(interaction) {
  await interaction.reply({ embeds: [embed("🌷 KyraBot Help", "✅ **/setup-verify** : bouton Verify\n📜 **/rules** : règles\n🎫 **/ticket** : ouvrir un ticket\n📢 **/announce** : annonce\n🧹 **/clear** : supprimer messages\n🔒 **/lock** / **/unlock** : gérer salon\n👤 **/userinfo** : infos membre\n🎉 **/server** : infos serveur")], ephemeral: true });
}};