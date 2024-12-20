const axios = require('axios');

module.exports.config = {
 name: "miko",
 version: "1.0.0",
 role: 0,
 aliases: ["Bot"],
 credits: "Armenion",
cooldown: 0,
hasPrefix: false,
	usage: "",
};

module.exports.run = async function ({ api, event, args }) {
 const content = encodeURIComponent(args.join(" "));

 if (!content) {
	return api.sendMessage("𝗜 𝘀𝘁𝗿𝗶𝘃𝗲 𝘁𝗼 𝗽𝗿𝗼𝘃𝗶𝗱𝗲 𝗵𝗲𝗹𝗽𝗳𝘂𝗹 𝗮𝗻𝗱 𝗽𝗿𝗼𝗳𝗲𝘀𝘀𝗶𝗼𝗻𝗮𝗹 𝗮𝗻𝘀𝘄𝗲𝗿𝘀 𝗯𝗮𝘀𝗲𝗱𝗼𝗻 𝘂𝘀𝗲𝗿 𝗶𝗻𝗾𝘂𝗶𝗿𝗶𝗲𝘀. 𝗜𝗳 𝘆𝗼𝘂 𝗵𝗮𝘃𝗲 𝗮𝗻𝘆 𝗾𝘂𝗲𝘀𝘁𝗶𝗼𝗻𝘀 𝗼𝗿 𝗻𝗲𝗲𝗱 𝗮𝘀𝘀𝗶𝘀𝘁𝗮𝗻𝗰𝗲, 𝗳𝗲𝗲𝗹 𝗳𝗿𝗲𝗲 𝘁𝗼 𝗮𝘀𝗸!"", event.threadID, event.messageID);
 }

 api.sendMessage("❐ 𝗩𝗜𝗡𝗖𝗘𝗡𝗧 𝗕𝗢𝗧 𝚃𝚢𝚙𝚒𝚗𝚐 𝐖𝐚𝐢𝐭 𝐚 𝐬𝐞𝐜𝐨𝐧𝐝 ...", event.threadID, event.messageID); 

 const apiUrl = `https://bluerepoapislasttry.onrender.com/hercai?content=${content}`;

 try {
	const response = await axios.get(apiUrl);
	const reply = response.data.reply;

	api.sendMessage(reply, event.threadID, event.messageID);
 } catch (error) {
	console.error("Error fetching data:", error.message);
	api.sendMessage("An error occurred while processing your request.", event.threadID);
 }
};
