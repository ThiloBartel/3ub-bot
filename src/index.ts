import dotenv from "dotenv";
dotenv.config();
import { Client, ClientOptions, GatewayIntentBits } from "discord.js";
import { reactCaptain } from "./captainReactions";
import { reactQoo } from "./qooReactions";
import { reactMammals } from "./mammals";
import { reactMagic } from "./magic";
import { reactDemon } from "./demon";
import { reactChicken, reactCock } from "./birdReactions";
import { reactFrog, reactPaw } from "./other";

const options: ClientOptions = {
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessageReactions,
  ],
};

const client = new Client(options);

client.login(process.env.DISCORD_TOKEN);
client.on("messageCreate", (msg) => {
  if (!msg.author.bot) {
    reactCaptain(msg);
    reactQoo(msg);
    reactCock(msg);
    reactMagic(msg);
    reactDemon(msg);
    reactChicken(msg);
    reactMammals(msg);
    reactPaw(msg);
    reactFrog(msg);
  }
});
