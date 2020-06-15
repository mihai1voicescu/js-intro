'use strict';

import fastify from 'fastify';

const app = fastify({logger: true});


app.get('/', async (req, res) => {
    res.type('application/json').code(200);

    console.log('new request');

    return {hello: 'world'};
});

app.listen(3001, (err, address) => {
    if (err)
        throw err;

    app.log.info(`Listening ${address}`);
});
