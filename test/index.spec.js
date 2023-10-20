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

describe('POST /register', () => {
	describe('wrong data', () => {
		test('missing data. Should respond with 400 bad request', (done) => {
			request(server)
				.post('/api/register')
				.send()
				.end((err, res) => {
					if (err) done(err);

					expect(res.statusCode).toBe(400);
					done();
				});
		});

		test('NAME field missing. Should respond with 400 bad request', (done) => {
			request(server)
				.post('/api/register')
				.send({ email: 'test@hotmail.com', password: 'Test1234' })
				.end((err, res) => {
					if (err) done(err);
					expect(res.statusCode).toBe(400);
					done();
				});
		});

		test('EMAIL field missing. Should respond with 400 bad request', (done) => {
			request(server)
				.post('/api/register')
				.send({ name: 'test name', password: 'Test1234' })
				.end((err, res) => {
					if (err) done(err);
					expect(res.statusCode).toBe(400);
					done();
				});
		});


	});
});
