const sendEmail = (email) => console.log(email);
const sendSms = (sms) => console.log(sms);
const sendSlack = (slack) => console.log(slack);

const sendNotification = (type, notification) => {
	if(type === 'email') return sendEmail(notification);
	if(type === 'sms') return sendSms(notification);
	if(type === 'slack') return sendSlack(notification);
}

const sendNotificationSwitch = (type, notification) => {
	//you might think that a posible improve of previous code would be a switch.
	switch(type) {
		case 'email':
			sendEmail(notification);
			break;
		case 'sms':
			sendSms(notification);
			break;
		case 'slack':
			sendSlack(notification);
			break;
		default:
			break;
	}
}

//May be more useful use objects for this cases.

const notificationTypeHandler = {
	email: sendEmail,
	sms: sendSms,
	slack: sendSlack,
}

const handler = notificationTypeHandler['email'];
handler('this is an email');
