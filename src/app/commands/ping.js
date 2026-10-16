/**
 * @typedef {import('commandkit').CommandData} CommandData
 * @typedef {import('commandkit').ChatInputCommand} ChatInputCommand
 * @typedef {import('commandkit').MessageCommand} MessageCommand
 */

import prettyMs from 'pretty-ms';

/**
 * Format Discord client uptime (ms) to a readable string.
 * @param {number} uptime - client.uptime (ms)
 * @returns {string} e.g. "2d 4h 31m"
 */
export function formatUptime(uptime) {
    if (!uptime) return '0s';
    return prettyMs(uptime, { secondsDecimalDigits: 0, unitCount: 3 });
}

/** @type {CommandData} */
export const command = {
    name: 'ping',
    description: "Ping the bot to check if it's online.",
};

/** @type {ChatInputCommand} */
export const chatInput = async (ctx) => {
    const latency = (ctx.client.ws.ping ?? -1).toString();
    const uptime = formatUptime(ctx.client.uptime);
    const response = `Pong! Latency: ${latency}ms | Uptime: ${uptime}`;
    await ctx.interaction.reply(response);
};

/** @type {MessageCommand} */
export const message = async (ctx) => {
    const latency = (ctx.client.ws.ping ?? -1).toString();
    const uptime = formatUptime(ctx.client.uptime);
    const response = `Pong! Latency: ${latency}ms | Uptime: ${uptime}`;

    await ctx.message.reply(response);
};
