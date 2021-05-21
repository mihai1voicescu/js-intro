'use strict';

import fastify from 'fastify';

import {createConnection, Connection} from 'mysql2/promise';

const app = fastify({logger: true});


app.get('/', async (req, res) => {

	/**
	 * @type {Connection}
	 */
	const connection = await createConnection({
		host: 'localhost',
		user: 'root',
		database: 'test'
	});

	await connection.query('SELECT 1;');

	res.type('application/json').code(200);

	console.log('new request');

	return {hello: 'world'};
});

app.listen(3001, (err, address) => {
	if (err)
		throw err;

	app.log.info(`Listening ${address}`);
});
