fx_version 'adamant'
game 'gta5'
description 'FiveM/Discord Tweet Bot'
author 'IamAdren'
version '1.0'

server_scripts {
	'server/server.js',
	'server/database.js',
	'server/commands.js'
}

client_scripts {
	'client.js'
}

dependencies {
	'yarn'
}