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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_10_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxODUsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjksXG4gICAgICAgIDIyNixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDk4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzEsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAyLFxuICAgICAgICAxODgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQwLFxuICAgICAgICAxODQsXG4gICAgICAgIDM3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDYsXG4gICAgICAgIDIsXG4gICAgICAgIDYyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzksXG4gICAgICAgIDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzksXG4gICAgICAgIDMxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4NixcbiAgICAgICAgODksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA4LFxuICAgICAgICA4MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDM1LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDM2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDIsXG4gICAgICAgIDg0LFxuICAgICAgICAxMixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTMwLFxuICAgICAgICA4NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDk1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4LFxuICAgICAgICAxMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQxLFxuICAgICAgICA3NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTE5LFxuICAgICAgICA2NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTI3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyLFxuICAgICAgICA5OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI3LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDkyLFxuICAgICAgICAzNixcbiAgICAgICAgNTUsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTExLFxuICAgICAgICA3NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTYzLFxuICAgICAgICA3OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYVkrbjQrY25kd2dzSTdQMWpYTmNiZEg0eHFBQWV0Y3lZcnN5MXMwTkJGOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwNjc2MzIwNzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkEzMTkwMzFCODlGRUJBMERGMEM0N0NFRTAyNDIyQUMyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTI4NjYzOVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJkVUszMlo2RlJBU2VqTkt6ZzdQT0x3XCIsXG4gIFwicGhvbmVJZFwiOiBcImUxZjYzMjMwLWUzMGMtNDM5Zi1hNzg0LTA2YTdkNDZjNGIzNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODIsXG4gICAgICA5MyxcbiAgICAgIDE2NyxcbiAgICAgIDU0LFxuICAgICAgMjI5LFxuICAgICAgMjU1LFxuICAgICAgODgsXG4gICAgICA4NSxcbiAgICAgIDE0OCxcbiAgICAgIDkxLFxuICAgICAgMTE5LFxuICAgICAgMTgzLFxuICAgICAgNDAsXG4gICAgICAxNDksXG4gICAgICA5NixcbiAgICAgIDE5NyxcbiAgICAgIDIwMyxcbiAgICAgIDE1NCxcbiAgICAgIDIzOCxcbiAgICAgIDEzNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDQsXG4gICAgICAyNDQsXG4gICAgICA3OCxcbiAgICAgIDE0MCxcbiAgICAgIDIzLFxuICAgICAgMjAwLFxuICAgICAgOSxcbiAgICAgIDQ4LFxuICAgICAgODUsXG4gICAgICAxOSxcbiAgICAgIDE2MixcbiAgICAgIDg2LFxuICAgICAgMjE5LFxuICAgICAgNjksXG4gICAgICAzLFxuICAgICAgMTI3LFxuICAgICAgNDMsXG4gICAgICAxNjYsXG4gICAgICA3NCxcbiAgICAgIDE3MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJEUUZUTFQ1TVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDY3NjMyMDcwOjcwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1NDc5MDkxNDU4ODgzNDo3MEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJNdWF6YW0gQWxpXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS3FZck1JSEVPai80clFHR0FvZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ6UDhLQ0dOS3d2akVSOWt1RHJZMGZoTDloUmlycU9WUWJOZTNpaThLdGx3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkFXcy9QK2U4cEdCZ0JmZG5zUFhKUDR3WlFkWU82bW16ZmZtWm16ZS9jQ2I1eEFzVmJYQVlwaDZCUXFYdS9IMXVZazQ4TnozOUIyVTJhR0ZpaFhUWkJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlpXSnZXWU5KUXhKOXMwRTRzYzljd0NiYUJHeUc1SDBWaGM1UDluWlZvdEdtYWxzU2IvYzlvOThzQndOd0E1SVVJT2R6bUQ0Wi9pS0VhREk2eUYyVkJnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA2NzYzMjA3MDo3MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTI4NjYzNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1yWVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTXJZLmpzb24iOiAie1wia2V5RGF0YVwiOlwiL1gxRDhBVC9VL0FMSXNqeU5RTm5pUFAxYTdLbFpNK2FwT2Rtd1E4b0IvOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDE4MTg0MjM0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAxNjEwMjUxMjlcIn0iCn0="  // PUT your SESSION_ID 


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
