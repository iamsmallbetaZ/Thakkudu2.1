let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/waifu')
  if (!res.ok) throw eror
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'Thakkudu 2.O', m, 0, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['anime']
handler.tags = ['internet']
handler.command = /^(anime)$/i

module.exports = handler
