// 	   /\_/\
//    ( o.o )
// 	   > ^ <
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//		─────▄████▀█▄
//		───▄█████████████████▄
//		─▄█████.▼.▼.▼.▼.▼.▼▼▼▼
//		▄███████▄.▲.▲▲▲▲▲▲▲▲
//		████████████████████▀▀

import startServer from '@config/functions/startServer';
import connectDB from '@config/functions/connect-DB';

const runApp = async (): Promise<boolean> => {
	try {
		await startServer();
		await connectDB();
	} catch (err) {
		console.log('ERROR!!');
		if (typeof err === 'string') {
			throw new Error(err);
		} else {
			console.log(err);
			throw new Error('An unknown error occurred');
		}
	}

	return true;
};
runApp();
