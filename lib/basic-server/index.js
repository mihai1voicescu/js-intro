import fastify from 'fastify';

// commonJS module
import pkg from 'mysql2/promise';

const {
	createConnection,
	Connection
} = pkg;

const app = fastify({logger: true});


app.get('/', async (req, res) => {

	console.log('trying request...');
    app.log.info(`TRY REQUEST`);
    
	/**
	 * @type {Connection}
	 */
	const connection = await createConnection({
		host: 'mariadb',
        port: 3306,
		user: 'root',
		password: 'pass',
		database: 'test_me'
	});


	const [clients] = await connection.query('SELECT * FROM client;');

	res.type('application/json').code(200);

	console.log('new request');

	return clients;
    
});

app.listen(3001, '0.0.0.0', (err, address) => {
	if (err)
		throw err;
    console.log('server started');
	app.log.info(`Listening ${address}`);
});
