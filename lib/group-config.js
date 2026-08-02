const config = require('../config');
async function groupEvents(conn, update) {
    // Variables de configuration (Assurez-vous qu'elles existent dans config.js)
    const isWelcomeEnabled = config.WELCOME_ENABLE === 'true'; 
    const isGoodbyeEnabled = config.GOODBYE_ENABLE === 'true'; 
    
    if (!isWelcomeEnabled && !isGoodbyeEnabled) return;

    try {
        const metadata = await conn.groupMetadata(update.id);
        const groupName = metadata.subject;
        const groupJid = update.id;
        const participants = update.participants;

        for (const participantJid of participants) {
            const username = `@${participantJid.split('@')[0]}`;
            
            // 1. GESTION DU MESSAGE DE BIENVENUE (ADD)
            if (update.action === 'add' && isWelcomeEnabled) {
                
                const defaultWelcomeMsg = 
`*╭═══⬡ WELCOME TO THE CREW 🪀⬡═══⬡ *
*│┃友*
*│┃友* *🌟 ɴᴇᴡ ᴍᴇᴍʙᴇʀ ᴀʀʀɪᴠᴇᴅ!*
*│┃友* *👋 ʜᴇʟʟᴏ:* ${username}
*│┃友* *🏰 ɢʀᴏᴜᴘ:* ${groupName}
*│┃友* *📝 ʀᴜʟᴇs:* Please read the rules in the group description.
*│┃友*
*╰═══════════════════⬡*`;
                
                const welcomeText = config.WELCOME_MSG || defaultWelcomeMsg;

                const message = welcomeText
                    .replace(/@user/g, username)
                    .replace(/@group/g, groupName);

                // Envoi de l'image de bienvenue si configurée
                if (config.WELCOME_IMAGE && config.WELCOME_IMAGE.length > 5) {
                    await conn.sendMessage(groupJid, {
                        image: { url: config.WELCOME_IMAGE },
                        caption: message,
                        mentions: [participantJid]
                    });
                } else {
                    await conn.sendMessage(groupJid, { text: message, mentions: [participantJid] });
                }
            }
            
            // 2. GESTION DU MESSAGE D'AU REVOIR (REMOVE)
            else if (update.action === 'remove' && isGoodbyeEnabled) {
                
                const defaultGoodbyeMsg = 
`*╭═══⬡ FAREWELL LEGEND 🪀⬡═══⬡ *
*│┃友*
*│┃友* *😔 ᴍᴇᴍʙᴇʀ ʟᴇғᴛ ᴛʜᴇ ᴄʜᴀᴛ...*
*│┃友* *👤 ʙʏᴇ ʙʏᴇ:* ${username}
*│┃友* *📢 ᴍsɢ:* We hope to see you again soon!
*│┃友*
*╰═══════════════════⬡*`;
                
                const goodbyeText = config.GOODBYE_MSG || defaultGoodbyeMsg;

                const message = goodbyeText
                    .replace(/@user/g, username)
                    .replace(/@group/g, groupName);
                
                // Envoi de l'image d'au revoir si configurée
                if (config.GOODBYE_IMAGE && config.GOODBYE_IMAGE.length > 5) {
                    await conn.sendMessage(groupJid, {
                        image: { url: config.GOODBYE_IMAGE },
                        caption: message,
                        mentions: [participantJid]
                    });
                } else {
                    await conn.sendMessage(groupJid, { text: message, mentions: [participantJid] });
                }
            }
        }
    } catch (e) {
        console.error("Group Events Error:", e.message);
    }
}

module.exports = {
    groupEvents
};
                                                      
