function getShortMessages(messages) {
	let result = messages.filter(function (element){ 
		return element.message.length < 50;
	});
	return result;
}

let messages = [{message: 'hi'},{message: 'hello world'},{message: 'ash asdh jsdhgsdhfghjg ajghd fhjgdjhf jghsdfj gsdjfg sdhgfjhdgsjfgjdhgsf jdhsfjdg sghjf'}];
console.log('Check if getShortMessages call is working',getShortMessages(messages).length === 2);
