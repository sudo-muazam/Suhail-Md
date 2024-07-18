const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE ||  ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ Muazamali²²¹-ᴍᴅ" 


global.devs = "923067632070" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923067632070";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_29_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTMsXG4gICAgICAgIDksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTA1LFxuICAgICAgICA3MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTU2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjAzLFxuICAgICAgICA2MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDcsXG4gICAgICAgIDE5NixcbiAgICAgICAgODcsXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODIsXG4gICAgICAgIDE5LFxuICAgICAgICA1MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjIyLFxuICAgICAgICA3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDk0LFxuICAgICAgICA3MixcbiAgICAgICAgNzUsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTYwLFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1MixcbiAgICAgICAgODUsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzksXG4gICAgICAgIDEsXG4gICAgICAgIDE5LFxuICAgICAgICA4OSxcbiAgICAgICAgNDksXG4gICAgICAgIDEwLFxuICAgICAgICA0MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDcsXG4gICAgICAgIDUwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjA5LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDUzLFxuICAgICAgICAyNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyMixcbiAgICAgICAgNyxcbiAgICAgICAgNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM4LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxNixcbiAgICAgICAgOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTExLFxuICAgICAgICA0NixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDc0LFxuICAgICAgICA2MixcbiAgICAgICAgMTA0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAwLFxuICAgICAgICAyMixcbiAgICAgICAgNTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjI3LFxuICAgICAgICA4MyxcbiAgICAgICAgODEsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTgxLFxuICAgICAgICA2NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjExLFxuICAgICAgICA1NixcbiAgICAgICAgMzcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOXhaWFp5UjZXRTk1VHZjZyt6VnZ0TWQrQ29kd0FqZWJrNkxSeTRzTmJRMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjM0OTMzOTE5MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjI1Q0FCQTkyRkVFMTM5NDIxMjMxQzkyREUyMjkzQzk0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDAyNzc4OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzQ5MzM5MTkyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRkI0MThBRTFDRTg0MUMzOERDN0U1NkJBOERDQzYxQThcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMDI3Nzg5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlhaY1NQVENNU1FlU0hxOF9GSFBIWndcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWI3OGE3MGItNGUxNC00MTYwLTgyODktMDMxMDFlODg2ZTBlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMCxcbiAgICAgIDI0MCxcbiAgICAgIDEwOCxcbiAgICAgIDE2LFxuICAgICAgNTYsXG4gICAgICAxMTcsXG4gICAgICAzNCxcbiAgICAgIDM4LFxuICAgICAgNjgsXG4gICAgICAyMTUsXG4gICAgICAxODIsXG4gICAgICAxMDAsXG4gICAgICA1MixcbiAgICAgIDE4MCxcbiAgICAgIDIyNixcbiAgICAgIDIyMyxcbiAgICAgIDIyMixcbiAgICAgIDQsXG4gICAgICAxMCxcbiAgICAgIDY5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMyLFxuICAgICAgMTgzLFxuICAgICAgMTY3LFxuICAgICAgMTQzLFxuICAgICAgMTY2LFxuICAgICAgODYsXG4gICAgICAxNzEsXG4gICAgICA2NixcbiAgICAgIDI0NSxcbiAgICAgIDk0LFxuICAgICAgMzIsXG4gICAgICAyNDksXG4gICAgICAxMjYsXG4gICAgICA3OSxcbiAgICAgIDEyNCxcbiAgICAgIDI1MyxcbiAgICAgIDIwNSxcbiAgICAgIDY0LFxuICAgICAgMTIzLFxuICAgICAgMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQ1E1RzdBOUpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQ5MzM5MTkyMjo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjA4ODU2NDk3MzU4MTE6NEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJNdWF6YW0gQWxpXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTDZZejVJR0VJZVZsclFHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIrRE8reEtKazVWZno3QnFZYnV0MGRGWEx6TUYrYlBDMGY4a29PRFY2WFN3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkVjWUZzYUpLOVdoWEFPRDdTcmJuYXVlL29LZFd2YlFTeWRJU1QvYXIwZ2lNWVFrQ2dwK0F1bHhFclhwNE9uMTNVdGU3VWZ4U29pWENhZ3BSc2NaTEJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInFxajZaYWg0UDhkNmkyNXVpeUJWR1lEUnZRaVlJSFp0TFp5MFJpMkcwcDc3eGk3NTArQTdYbTJWQ21PSXNLa1l2TFVlVE9uUDl1UUhHbnBTaVhnUmlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQ5MzM5MTkyMjo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA0NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMDI3Nzg2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRjFwXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGMXAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJHZ1JKU1dtd0oyR1VTeVF4TXAwMFRPN05SZUtYaVFYZUZBR3h5d3F6TUw4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2NDk2NTg5NDIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTk3MTg2NjQ5MVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
