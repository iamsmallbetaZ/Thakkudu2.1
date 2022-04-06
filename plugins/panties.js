let handler = async (m, { conn }) => {
 
  conn.sendFile(m.chat, 'https://api.xteam.xyz/randomimage/panties?APIKEY=HIRO', '', 'Chugam frm Thakkudu', m)
  
}
handler.help = ['pantsu']
handler.tags = ['nsfw']
handler.command = /^(pantsu)$/i

handler.limit = true
handler.group = true
handler.nsfw = true

module.exports = handler
