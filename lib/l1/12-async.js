// turn JS in a more sain language
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

/*
 _    _      _                            _          _          _ _
| |  | |    | |                          | |        | |        | | |
| |  | | ___| | ___ ___  _ __ ___   ___  | |_ ___   | |__   ___| | |
| |/\| |/ _ \ |/ __/ _ \| '_ ` _ \ / _ \ | __/ _ \  | '_ \ / _ \ | |
\  /\  /  __/ | (_| (_) | | | | | |  __/ | || (_) | | | | |  __/ | |
 \/  \/ \___|_|\___\___/|_| |_| |_|\___|  \__\___/  |_| |_|\___|_|_|

 */

// JS is an event driven language, it's async by nature

// callbacks used to be the norm, which made for a very bad developer experience
// fortunately now the async/await syntax exists in combination with Promises

// lets see the legacy version

// nodeJS file system
import * as fs from 'fs';

fs.readFile('../../package.json', {encoding: 'utf8'}, readFileCb);

// the rest of the code will be executed before the callback is called

function readFileCb(err, data) {
	// this function will be called after the file is read
	if (err) {
		console.error("Error", err);

		// very important
		return;
	}

	console.log(data.slice(0, 10));

	// if I want to write smth I have to do it in the callback

	fs.writeFile('./joke1.json', data, {encoding: 'utf8'}, function (err) {
		if (err) {
			console.error("Failed to write", err);

			// very important
			return;
		}

		console.log("wrote");
	})
}

// as you can see this is pretty ugly, fortunately we have Promises now

fs.promises.readFile('../../package.json', {encoding: 'utf8'}).then((data) => {
	fs.promises.writeFile('./joke2.json', data, {encoding: 'utf8'}).then(() => {
		console.log("wrote");
	}).catch((err) => {
		console.error("Failed to write", err);
	})
}).catch((err) => {
	console.error("Error", err);
});

// well, not that more readable no ?


// fortunately we have async await which make Promise async code human readable and makes it look like sequential code

async function ez() {
	let data;

	try {
		data = await fs.promises.readFile('../../package.json', {encoding: 'utf8'});
	} catch (e) {
		console.error("Error", err);
		return;
	}

	try {
		await fs.promises.writeFile('./joke3.json', data, {encoding: 'utf8'})
		console.log("wrote");
	} catch (e) {
		console.error("Failed to write", err);
	}
}

ez();

// be very careful, if an async call was made in a non async function the try/catch will work ONLY on the sequential code

// with Promises it's also very easy to sync async operations

Promise.all([
	Promise.resolve(3),
	Promise.resolve(3),
	Promise.resolve(3),
	Promise.resolve(3)
]).then((res) => {
	console.log(res);
})
