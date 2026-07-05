const express = require("express");
const { Client, GatewayIntentBits, Partials, Collection } = require("discord.js");
const config = require("./config");
const { loadCommands } = require("./handlers/commandHandler");
const { loadEvents } = require("./handlers/eventHandler");

const app = express();
app.get("/", (req, res) => res.send("KyraBot Premium Complete online 🌷"));
app.listen(process.env.PORT || 3000, () => console.log("Web server online ✅"));

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
  partials: [Partials.Channel]
});

client.commands = new Collection();
loadCommands(client);
loadEvents(client);
client.login(config.token);
