const { SlashCommandBuilder } = require("discord.js");
const { embed } = require("../../utils/embeds");
module.exports = { data: new SlashCommandBuilder().setName("rules").setDescription("Affiche les règles."), async execute(interaction) {
  await interaction.reply({ embeds: [embed("📜 Règlement", "1. Respecte tous les membres.\n2. Pas d'insultes, harcèlement, racisme ou drama.\n3. Pas de spam ni publicité sans autorisation.\n4. Utilise les bons salons.\n5. Amuse-toi dans une ambiance clean/coquette 🎀")] });
}};