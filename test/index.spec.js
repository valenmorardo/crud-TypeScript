import request from 'supertest';
import server from '../src/config/server.cfg.ts';

describe('GET /', () => {
	test('should return status code 200', async () => {
		const response = await request(server).get('/').send();
		console.log(response);
		expect(response.statusCode).toBe(200);
	});

	test('el body debe ser text/html', async () => {
		const response = await request(server).get('/').send();
		expect(response.header['content-type']).toMatch('html');
	});
});

describe('GET /api', () => {
	test('should respond with status code 200', (done) => {
		request(server)
			.get('/api')
			.send()
			.expect(200)
			.end((err) => {
				if (err) done(err);
				done();
			});
	});

	test('should responde with content type json in body', (done) => {
		request(server)
			.get('/api')
			.send()
			.end((err, res) => {
				if (err) done(err);
				expect(res.headers['content-type']).toMatch('json');
				done();
			});
	});
});
