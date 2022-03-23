let fetch = require ('node-fetch')
let handler = async (m, { conn }) => {
    let haruno = `┌ 「 𝐺𝐼𝑇 & 𝑊𝐴 𝐺𝑅𝑈𝑃 𝐿𝐼𝑁𝐾」
    𝙱𝚘𝚃 𝙶𝚒𝚝 & 𝚆𝙰 𝙶𝚛𝚘𝚞𝚙 𝙻𝚒𝚗𝚔🤸🏼
  https://github.com/I4MBetAZ/PBA-BoT-V1
  WhatsApp Group link
  https://chat.whatsapp.com/D3fhKLgNybo7RP4TEKgrFc
 Watch Tutorial Video
`.trim(https://www.youtube.com/channel/UCxkxhbcHQb2B8JH3j-UVArQ)
    await conn.send2ButtonImg(m.chat, await (await fetch("https://telegra.ph/file/24205ebf7697a6519e519.png")).buffer(), haruno, 'Thakkudu BoT', 'Kidu🤹🏻‍♂️', '.menu', 'HeHe🤺', '.menu', m)
}
handler.tags = ['main']
handler.help = ['git']
handler.command = /^(git)$/i
module.exports = handler
