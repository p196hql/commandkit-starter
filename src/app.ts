import { Client } from 'discord.js';
import { registerPrefixResolver } from './app/util/prefixResolver';

const client = new Client({
  intents: ['Guilds', 'GuildMembers', 'GuildMessages', 'MessageContent'],
});

registerPrefixResolver();

export default client;