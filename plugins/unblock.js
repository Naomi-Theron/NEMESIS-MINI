const { cmd } = require("../ridzcoder");

cmd({
  pattern: "unblock",
  alias: ["unb", "unblk", "unblok"],
  react: "🥰",
  category: "owner",
  desc: "Unblock user (reply or inbox)",
  filename: __filename
}, async (conn, mek, m, { from, reply, isOwner }) => {
  try {

    // 🔒 Owner only
    if (!isOwner) {
      return reply("*Ridz Coder command only 😎*");
    }

    let jid;

    // 📌 Reply case
    if (m.quoted) {
      jid = m.quoted.sender;
    }
    // 📌 Inbox case
    else if (from.endsWith("@s.whatsapp.net")) {
      jid = from;
    } 
    else {
      return reply("*TO GET UNBLOCKED, REPLY TO ANY MESSAGE OR SEND ME A DM*");
    }

    await conn.updateBlockStatus(jid, "unblock");

    await conn.sendMessage(from, {
      react: { text: "🥰", key: mek.key }
    });

    reply(`*I have unblocked you ☺️*`, { mentions: [jid] });

  } catch (e) {
    console.log("UNBLOCK ERROR:", e);
    reply("*❌ UNBLOCK NAHI HO PAYA 😔*");
  }
});
