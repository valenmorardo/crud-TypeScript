import request from 'supertest';
import server from '../src/config/server.cfg.ts';

describe('GET /', () => {
	test('should return status code 200', async () => {
		const response = await request(server).get('/').send();
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

import User_Model from '@models/User';

describe('POST /register', () => {
	const correctData = {
		name: 'Test Name',
		email: 'test@email.com',
		password: 'Test123456.',
	};

	describe('MISSING data', () => {
		test('all data missing. Should respond with 400 bad request', (done) => {
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

		test('PASSWORD field missing. Should respond with 400 bad request', (done) => {
			request(server)
				.post('/api/register')
				.send({ name: 'test name', email: 'test@hotmail.com' })
				.end((err, res) => {
					if (err) done(err);
					expect(res.statusCode).toBe(400);
					done();
				});
		});
	});

	describe('NAME incorrect format', () => {
		test('empty field. Should respond with 400 bad request', (done) => {
			request(server)
				.post('/api/register')
				.send({ name: ' ', email: 'test@gmail.com', password: 'Test12345.' })
				.end((err, res) => {
					if (err) done(err);
					expect(res.statusCode).toBe(400);
					done();
				});
		});

		test('incorrect format. Should respond with 400 bad request', (done) => {
			request(server)
				.post('/api/register')
				.send({
					name: 'Test 1test9.-}!',
					email: 'test@gmail.com',
					password: 'Test12345.',
				})
				.end((err, res) => {
					if (err) done(err);

					expect(res.statusCode).toBe(400);
					done();
				});
		});
	});

	describe('EMAIL incorrect format', () => {
		test('empty field. Should respond with 400 bad request', (done) => {
			request(server)
				.post('/api/register')
				.send({ name: 'Test Test', password: 'Test12345.', email: ' ' })
				.end((err, res) => {
					if (err) done(err);
					expect(res.statusCode).toBe(400);
					done();
				});
		});

		test('incorrect format. Should respond with 400 bad request', (done) => {
			request(server)
				.post('/api/register')
				.send({
					name: 'Test Test',
					email: 'testgmail',
					password: 'Test12345.',
				})
				.end((err, res) => {
					if (err) done(err);
					expect(res.statusCode).toBe(400);
					done();
				});
		});
	});

	describe('PASSWORD incorrect format', () => {
		test('empty field. Should respond with 400 bad request', (done) => {
			request(server)
				.post('/api/register')
				.send({ name: 'Test Test', email: 'test@gmail.com', password: ' ' })
				.end((err, res) => {
					if (err) done(err);
					expect(res.statusCode).toBe(400);
					done();
				});
		});

		test('incorrect format. Should respond with 400 bad request', (done) => {
			const incorrectFormat = [
				{ name: 'Test Test', email: 'testgmail', password: 'test' },
				{
					name: 'Test Test',
					email: 'testgmail',
					password: 'Test',
				},
				{
					name: 'Test Test',
					email: 'testgmail',
					password: 'Test1',
				},
			];

			incorrectFormat.forEach((element) => {
				request(server)
					.post('/api/register')
					.send(element)
					.end((err, res) => {
						if (err) done(err);
						expect(res.statusCode).toBe(400);
					});
			});

			done();
		});
	});

	describe('Succesfull register', () => {
		test('should respond with status code 201', (done) => {
			request(server)
				.post('/api/register')
				.send(correctData)
				.end((err, res) => {
					if (err) done(err);
					expect(res.statusCode).toBe(201);
					done();
				});
		});
	});
});


describe('POST /login', () => {

	describe('MISSING data', () => {
		test('all data missing. Should respond with 400 bad request', (done) => {
			request(server)
				.post('/api/login')
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
				.send({ email: 'test@email.com' })
				.end((err, res) => {
					if (err) done(err);
					expect(res.statusCode).toBe(400);
					done();
				});
		});

		test('PASSWORD field missing. Should respond with 400 bad request', (done) => {
			request(server)
				.post('/api/register')
				.send({email: 'test@email.com'})
				.end((err, res) => {
					if (err) done(err);
					expect(res.statusCode).toBe(400);
					done();
				});
		});
		


	});
})