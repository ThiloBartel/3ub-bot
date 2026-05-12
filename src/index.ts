import dotenv from "dotenv";
dotenv.config();
import { Client, ClientOptions, GatewayIntentBits } from "discord.js";
import { reactCaptain } from "./msgReactions/captainReactions";
import { reactQoo } from "./msgReactions/qooReactions";
import { reactMammals } from "./msgReactions/mammals";
import { reactMagic } from "./msgReactions/magic";
import { reactDemon } from "./msgReactions/demon";
import { reactChicken, reactCock } from "./msgReactions/birdReactions";
import { reactFrog, reactPaw } from "./msgReactions/other";
import { reactFood } from "./msgReactions/food";

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
    reactFood(msg);
  }
});
