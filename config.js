 fs = require('fs');
const dotenv = require('dotenv');
if (fs.existsSync('.env')) {
    dotenv.config({ path: '.env' });
}
module.exports = {
    SESSION_ID: process.env.SESSION_ID || "NEMESIS MD",
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb+srv://Ridzcoder:Ridzlian@nemesis.mlzjmlc.mongodb.net/?appName=Nemesis',
    PREFIX: process.env.PREFIX || '.',
        OWNER_NUMBER: process.env.OWNER_NUMBER || '+237678687593',
    BOT_NAME: "NEMESIS MD MINI",
    BOT_FOOTER: '© ʙʀᴏᴜɢʜᴛ ᴛᴏ ʏᴏᴜ ʙʏ ᴋᴇᴠɪɴ ᴛᴇᴄʜ,ʀɪᴅᴢ ᴄᴏᴅᴇʀ &ᴜʀ ᴛʜᴇʀᴏɴ',
    WORK_TYPE: process.env.WORK_TYPE || "public",

    AUTO_VIEW_STATUS: process.env.AUTO_VIEW_STATUS || 'true',
    AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || 'true',
    AUTO_LIKE_EMOJI: ['❤️', '🌹', '✨', '🥰', '🌹', '😍', '💞', '💕', '☺️', '🤗'],
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'false',
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || '🤗',
    READ_MESSAGE: process.env.READ_MESSAGE || 'false',
       AUTO_TYPING: process.env.AUTO_TYPING || 'false',
    AUTO_RECORDING: process.env.AUTO_RECORDING || 'false',

    WELCOME_ENABLE: process.env.WELCOME_ENABLE || 'true',
    GOODBYE_ENABLE: process.env.GOODBYE_ENABLE || 'true',
    WELCOME_MSG: process.env.WELCOME_MSG || null,
    GOODBYE_MSG: process.env.GOODBYE_MSG || null,
    WELCOME_IMAGE: process.env.WELCOME_IMAGE || null,
    GOODBYE_IMAGE: process.env.GOODBYE_IMAGE || null,
    GROUP_INVITE_LINK: process.env.GROUP_INVITE_LINK || 'https://chat.whatsapp.com/Jpf5TU6nrwlFcQnW86bR7f?s=cl&p=a&mlu=4&amv=3',
    ANTI_CALL: process.env.ANTI_CALL || 'false',
    REJECT_MSG: process.env.REJECT_MSG || '*CALL LATER PLEASE ☺️🌹*',
    IMAGE_PATH: 'https://files.catbox.moe/sbgnhh.png',
    CHANNEL_LINK: 'https://whatsapp.com/channel/0029VarfjW04tRrmwfb8x306',
    TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '8989374735:AAFHQ4OZmOpSeevE0NN4Fac3dgmmAW_HXu4',
    TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID || '7378083614'

};