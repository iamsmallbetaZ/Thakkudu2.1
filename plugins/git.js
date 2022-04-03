let fetch = require ('node-fetch')
let handler = async (m, { conn }) => {
    let haruno = `┌ 「 ＧＩＴ ＆ ＩＮＦＯ．．．．」
 ♨This is the GIT Vro 🤹🏻‍♂️
🗯 https://github.com/I4MBetAZ/PBA-BoT-V1
 ♨ PBA BoT ZoNe 🤺
🗯 https://bit.ly/3u26J1F
♨Subscribe PBA MoDs 🙃
🗯 https://bit.ly/3qWJzHW
 `.trim()
    await conn.send2ButtonImg(m.chat, await (await fetch("https://i.imgur.com/Y2576FG.jpg")).buffer(), haruno, 'Thakkudu 2.O', 'Kiduvaa🥳', '.menu', 'Choooper😝', '.menu', m)
}
handler.tags = ['main']
handler.help = ['git']
handler.command = /^(git)$/i
module.exports = handler
