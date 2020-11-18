module.exports = {
	/* The token of your Discord Bot */
	token: "Nzc3NDY1MDQ1NjYyOTU3NTk4.X7D0vw.CgJPMFg4Pd1Ek4gqXBbwLRoLC9M",
	/* For the support server */
	support: {
		id: "771676223649873940", // The ID of the support server
		logs: "777551090224463902", // And the ID of the logs channel of your server (new servers for example)
	},
	/* Dashboard configuration */
	dashboard: {
		enabled: false, // whether the dashboard is enabled or not
		secret: "S65St6lcciTGdNTw4j_yUXpVOr7ozPyz", // Your discord client secret
		baseURL: "https://dashboard.atlanta-bot.fr", // The base URl of the dashboard
		logs: "777551090224463902", // The channel ID of logs
		port: 8080, // Dashboard port
		expressSessionPassword: "XXXXXXXXXXX", // Express session password (it can be what you want)
		failureURL: "https://www.atlanta-bot.fr" // url on which users will be redirected if they click the cancel button (discord authentication)
	},
	mongoDB: "mongodb+srv://user:2loma344y@cluster0.j82dj.mongodb.net/osaurus?retryWrites=true&w=majority", // The URl of the mongodb database
	prefix: "-", // The default prefix for the bot
	/* For the embeds (embeded messages) */
	embed: {
		color: "#0091fc", // The default color for the embeds
		footer: "NEURO | NERO" // And the default footer for the embeds
	},
	/* Bot's owner informations */
	owner: {
		id: "732597393446404106", // The ID of the bot's owner
		name: "NERO" // And the name of the bot's owner
	},
	/* DBL votes webhook (optional) */
	votes: {
		port: 5000, // The port for the server
		password: "XXXXXXXXXXX", // The webhook auth that you have defined on discordbots.org
		channel: "XXXXXXXXXXX" // The ID of the channel that in you want the votes logs
	},
	/* The API keys that are required for certain commands */
	apiKeys: {
		// BLAGUE.XYZ: https://blague.xyz/
		blagueXYZ: "BURDM._wX5KYj_yXrz16S77i.RgktKWmbtsjSLg9nYHakFe.Zk5B2gj0Qt5jQuMw",
		// FORTNITE TRN: https://fortnitetracker.com/site-api
		fortniteTRN: "012da248-1115-4419-be6b-8625aaeb9116",
		// FORTNITE FNBR: https://fnbr.co/api/docs
		fortniteFNBR: "012da248-1115-4419-be6b-8625aaeb9116",
		// DBL: https://discordbots.org/api/docs#mybots
		dbl: "XXXXXXXXXXX",
		// AMETHYSTE: https://api.amethyste.moe
		amethyste: "d62e8ee57e112cc1d038524e8e085530e99e0cfe941faba421af84672f069802ebf93b0ca82f0a3048345de244047e31f32710adb54608d6b8888fbbdea0b4a5",
		// SENTRY: https://sentry.io (this is not required and not recommended - you can delete the field)
		sentryDSN: "XXXXXXXXXXX"
	},
	/* The others utils links */
	others: {
		github: "https://discord.gg/Y8Nyp5u", // Founder's github account
		donate: "https://discord.gg/Y8Nyp5u" // Donate link
	},
	/* The Bot status */
	status: [
		{
			name: "NEURO help on {serversCount} servers",
			type: "LISTENING"
		},
		{
			name: "my website :COMMING SOON",
			type: "PLAYING"
		}
	],
	/* Language configuration */
	languages: [
		{
			name: "en-US",
			nativeName: "English",
			moment: "en",
			defaultMomentFormat: "MMMM Do YYYY",
			default: true,
			aliases: [
				"English",
				"en",
				"en-us",
				"en_us",
				"en_US"
			]
		},
		{
			name: "fr-FR",
			nativeName: "Français",
			defaultMomentFormat: "Do MMMM YYYY",
			moment: "fr",
			default: false,
			aliases: [
				"French",
				"français",
				"francais",
				"fr",
				"fr_fr"
			]
		},
		{
			name: "es-ES",
			nativeName: "Español",
			defaultMomentFormat: "MMM Do, YYYY",
			moment: "es",
			default: false,
			aliases: [
				"Spanish",
				"es",
				"es_es"
			]
		},
		{
			name: "it-IT",
			nativeName: "Italiano",
			defaultMomentFormat: "Do MMMM YYYY",
			moment: "it",
			default: false,
			aliases: [
				"Italian",
				"it",
				"it_it"
			]
		},
		{
			name: "nl-NL",
			nativeName: "Nederlands",
			defaultMomentFormat: "Do MMMM YYYY",
			moment: "nl",
			default: false,
			aliases: [
				"Dutch",
				"nl",
				"nl_nl"
			]
		},
		{
			name: "pt-PT",
			nativeName: "Português",
			defaultMomentFormat: "Do MMMM YYYY",
			moment: "pt",
			default: false,
			aliases: [
				"Portuguese",
				"pt",
				"pt_pt"
			]
		}
	]
};
