let fetch = require ('node-fetch')
let handler = async (m, { conn }) => {
    let haruno = `┌ 「 𝐆𝐈𝐓」
    This is the GIT Vro 🤹🏻‍♂️
https://github.com/I4MBetAZ/PBA-BoT-V1
  PBA BoT ZoNe 🤺
  https://chat.whatsapp.com/D3fhKLgNybo7RP4TEKgrFc
 Subscribe PBA MoDs 🙃
 `.trim()
    await conn.send2ButtonImg(m.chat, await (await fetch("https://telegra.ph/file/8871e93ac5d3c3fb82817.png")).buffer(), haruno, 'Thakkudu 2.O', 'Kiduvaa🥳', '.menu', 'Choooper😝', '.menu', m)
}
handler.tags = ['main']
handler.help = ['git']
handler.command = /^(git)$/i
module.exports = handler
