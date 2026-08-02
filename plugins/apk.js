const { cmd } = require("../ridzcoder");
const axios = require('axios');

cmd({
  pattern: "apk",
  alias: ["app", "playstore", "application"],
  react: "☺️",
  desc: "Download APK via Aptoide",
  category: "download",
  use: ".apk <name>",
  filename: __filename
}, async (conn, mek, m, { from, reply, q }) => {
  try {
    if (!q) return reply("*DO YOU WANT TO DOWNLOAD ANY APK *\n*THEN WRITE IT LIKE THIS ☺️*\n*.apk ❮APK NAME❯*");

    const apiUrl = `http://ws75.aptoide.com/api/7/apps/search/query=${encodeURIComponent(q)}/limit=1`;
    const { data } = await axios.get(apiUrl);

    if (!data || !data.datalist || !data.datalist.list.length) {
      return reply("*APK NAHI MIL RAHI 😔*");
    }

    const app = data.datalist.list[0];
    const appSize = (app.size / 1048576).toFixed(2);

    let caption = `*╭──⧼♛ APK INFO NEMESIS MINI ♛⧽──≽
│┃ ♛ NAME: ${app.name.toUpperCase()}*
│┃ ♛ SIZE :❯ ${appSize} MB*
│┃ ♛ PACK :❯ ${app.package.toUpperCase()}*
│┃ ♛ VER :❯ ${app.file.vername}*
╰━━━━━━━━━━━━━━━┈⊷*

* ʀɪᴅᴢ ᴄᴏᴅᴇʀ x ᴋᴇᴠɪɴ ᴛᴇᴄʜ x ᴛʜᴇʀᴏɴ *`;

    await conn.sendMessage(from, { image: { url: app.icon }, caption }, { quoted: mek });

    await conn.sendMessage(from, {
      document: { url: app.file.path || app.file.path_alt },
      mimetype: "application/vnd.android.package-archive",
      fileName: `${app.name.toUpperCase()}.apk`
    }, { quoted: mek });

    await m.react("😍");
  } catch (err) {
    reply("*👑 ERROR :❯* TRY AGAIN!");
  }
});
                   
