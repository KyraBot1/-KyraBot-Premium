const { SlashCommandBuilder, PermissionFlagsBits, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const config = require("../../config");
const { embed } = require("../../utils/embeds");
module.exports = {
  data: new SlashCommandBuilder().setName("setup-verify").setDescription("Crée le panneau de vérification.").setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  async execute(interaction) {
    const panel = embed("🌸 Verificación", `¡Bienvenido/a a **${config.serverName}**! 🌷\n\nHaz clic en el botón de abajo para recibir el rol **Verificado** y acceder al servidor. n\n\n 📜 Gracias por respetar las reglas.`);
    const row = new ActionRowBuilder().addComponents(new ButtonBuilder().setCustomId("verify_button").setLabel("Verify").setEmoji("✅").setStyle(ButtonStyle.Success));
    await interaction.channel.send({ embeds: [panel], components: [row] });
    await interaction.reply({ content: "✅ Panel de verificación enviado", ephemeral: true });
  }
};
