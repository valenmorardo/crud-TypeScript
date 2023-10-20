import request from 'supertest'
import server from '../src/config/server.cfg.ts'

describe('GET /', () => {
    test('should return status code 200', async () => {
        const response = await request(server).get('/').send();
        expect(response.statusCode).toBe(200)
    })
}) 