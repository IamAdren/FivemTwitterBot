onNet('notify', (message) => {
	SetNotificationTextEntry('STRING')
	AddTextComponentString(message)
	DrawNotification(0,1)
});