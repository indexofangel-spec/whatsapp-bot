const { default: makeWASocket } = require("@whiskeysockets/baileys")

async function startBot(){
const sock = makeWASocket()

sock.ev.on("messages.upsert", async ({ messages }) => {
const m = messages[0]
if(!m.message) return

const text = m.message.conversation

if(text === "hi"){
await sock.sendMessage(m.key.remoteJid,{text:"Hello 👋 I am a bot"})
}
})
}

startBot()
