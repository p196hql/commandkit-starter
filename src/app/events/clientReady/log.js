/**
 * @typedef {import('commandkit').EventHandler<'clientReady'>} ClientReadyHandler
 */

/** @type {ClientReadyHandler} */
const handler = (client) => {
    console.log(`🤖 ${client.user.displayName} is online!`);
};

export default handler;