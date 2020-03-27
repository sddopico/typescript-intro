let message;
message = 'abc';
let endsWithC = message.endsWith('c');

//assert string
let endsWithC = (<string>message).endsWith('c');
let altWay = (message as string).endsWith('c');
