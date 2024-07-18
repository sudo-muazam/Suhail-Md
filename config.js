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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_54_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjksXG4gICAgICAgIDExMixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA5LFxuICAgICAgICA2MixcbiAgICAgICAgNDEsXG4gICAgICAgIDc1LFxuICAgICAgICA5MixcbiAgICAgICAgMjAzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjMzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDksXG4gICAgICAgIDQzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTksXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAzMixcbiAgICAgICAgOTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjUxLFxuICAgICAgICA0MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDExLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTA2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI2LFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzksXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDc3LFxuICAgICAgICA0NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzNixcbiAgICAgICAgODMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE1LFxuICAgICAgICA2MixcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjAwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDY4LFxuICAgICAgICAxNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDgsXG4gICAgICAgIDUwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDc5LFxuICAgICAgICAyNSxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNSxcbiAgICAgICAgODEsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDM4LFxuICAgICAgICAyNCxcbiAgICAgICAgNixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTM4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMCxcbiAgICAgICAgMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDgxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjMyLFxuICAgICAgICA2NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODMsXG4gICAgICAgIDcyLFxuICAgICAgICAzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNixcbiAgICAgICAgMTM5LFxuICAgICAgICAxODAsXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDExNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMixcbiAgICAgICAgNjUsXG4gICAgICAgIDkzLFxuICAgICAgICA2MixcbiAgICAgICAgNzAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjksXG4gICAgICAgIDkwLFxuICAgICAgICA3MSxcbiAgICAgICAgODMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDk2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNixcbiAgICAgICAgMjIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTY3LFxuICAgICAgICA1NixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1LFxuICAgICAgICAxODUsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTIsXG4gICAgICAgIDU3LFxuICAgICAgICA4OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJuQ01iRXRRdFJiMVBOOUdGaHVicGtxY2E1SnRrQmc1SXlqN05PcFJRQk5JPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA2NzYzMjA3MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMUQ4NDAxQUYwMjg1OEUyOTg2NkVBNTUxNkQ1MUIwMjZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMjg1NjYyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInBmenhGLW5RU1plOWxrSTg0cGt6MHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWMzMDdmNDMtZTQyNC00NDk4LTg1YTktZTM4NmRiZGE1N2IwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NCxcbiAgICAgIDI0MixcbiAgICAgIDcyLFxuICAgICAgMTY3LFxuICAgICAgMjAxLFxuICAgICAgMjE5LFxuICAgICAgNDksXG4gICAgICAxOCxcbiAgICAgIDE4NixcbiAgICAgIDI0OCxcbiAgICAgIDY0LFxuICAgICAgMjQyLFxuICAgICAgOTEsXG4gICAgICAxNzUsXG4gICAgICA4MCxcbiAgICAgIDg1LFxuICAgICAgMTkwLFxuICAgICAgMjI1LFxuICAgICAgMTQ4LFxuICAgICAgMTUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY2LFxuICAgICAgNzUsXG4gICAgICA5OSxcbiAgICAgIDc2LFxuICAgICAgMjQ2LFxuICAgICAgMCxcbiAgICAgIDExNSxcbiAgICAgIDE3OSxcbiAgICAgIDE1MixcbiAgICAgIDExMSxcbiAgICAgIDMzLFxuICAgICAgMixcbiAgICAgIDIwNSxcbiAgICAgIDQxLFxuICAgICAgMTM0LFxuICAgICAgMTA1LFxuICAgICAgMjU1LFxuICAgICAgMTE3LFxuICAgICAgMixcbiAgICAgIDQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlRaU0FXUVdQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwNjc2MzIwNzA6NjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjU0NzkwOTE0NTg4ODM0OjY5QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIk11YXphbSBBbGlcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLcVlyTUlIRUpiNDRyUUdHQWtnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInpQOEtDR05Ld3ZqRVI5a3VEclkwZmhMOWhSaXJxT1ZRYk5lM2lpOEt0bHc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRTFNd0VsZUZBSkYvS3dYWVordTJjeHg0QmY3Y1ZvY1puaDFPZTRuSGhVK2xDYjlGZ3VBSlRndldUcnNQVWRVRlJVdm92NXUwVDlWRHdoTTJuWVRUREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibllEZm5UaTBmUVdrSFJBaFZDVTEyRXhhclY1TW02TUZPU0twZlpoZkN4aFBVV2ZsaU4zL25zYlJ2ZXo5cmE5QmZFQ3puT3lCWlFFZkhkbTIyVXNwQlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDY3NjMyMDcwOjY5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMjg1NjU4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTXJZXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNclkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIvWDFEOEFUL1UvQUxJc2p5TlFObmlQUDFhN0tsWk0rYXBPZG13UThvQi84PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwMTgxODQyMzQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDE2MTAyNTEyOVwifSIKfQ=="  // PUT your SESSION_ID 


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
