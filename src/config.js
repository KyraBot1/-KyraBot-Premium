require("dotenv").config();

module.exports = {
  token: process.env.DISCORD_TOKEN,
  clientId: process.env.CLIENT_ID,
  guildId: process.env.GUILD_ID,
  serverName: process.env.SERVER_NAME || "Kyra's World",
  color: parseInt(process.env.BOT_COLOR || "ff8ac7", 16),
  channels: {
    welcome: process.env.WELCOME_CHANNEL_ID || "",
    goodbye: process.env.GOODBYE_CHANNEL_ID || "",
    verify: process.env.VERIFY_CHANNEL_ID || "",
    logs: process.env.LOG_CHANNEL_ID || "",
    tickets: process.env.TICKET_CATEGORY_ID || ""
  },
  roles: {
    verified: process.env.VERIFIED_ROLE_ID || "",
    member: process.env.MEMBER_ROLE_ID || "",
    staff: process.env.STAFF_ROLE_ID || ""
  }
};
