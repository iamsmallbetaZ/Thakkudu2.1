let fetch = require ('node-fetch')
let handler = async (m, { conn }) => {
    let haruno = `┌ 「 𝐺𝐼𝑇 & 𝑊𝐴 𝐺𝑅𝑈𝑃 𝐿𝐼𝑁𝐾」
    ᵀʰᵃᵏᵏᵘᵈᵘ ᴮᵒᵀ ᴳᴵᵀ & ᵂᴬ ᴳᴿᵁᴾ ᴸᴵᴺᵏ  https://github.com/I4MBetAZ/PBA-BoT-V1
  WhatsApp Group link
  https://chat.whatsapp.com/D3fhKLgNybo7RP4TEKgrFc
 Subscribe PBA MoDs
`https://www.youtube.com/channel/UCxkxhbcHQb2B8JH3j-UVArQ/videos    await conn.send2ButtonImg(m.chat, await (await fetch("https://telegra.ph/file/422a1723277a7cb07be0c.jpg")).buffer(), haruno, 'Thakkudu WA BoT', 'KIdu😝', '.menu', 'Nice😉', '.menu', m)}
handler.tags = ['main']
handler.help = ['git']
handler.command = /^(git)$/i
module.exports = handler
