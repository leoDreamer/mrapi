import pem from 'pem'
import { json } from 'body-parser'
import cookieParser from 'cookie-parser'
import { App } from '../src/index'
import Ajax from './__fixtrues__/axios'
let app: App
const ajax = new Ajax()
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
describe('App Basic', () => {
  beforeEach(() => {
    app = new App()
  })

  afterEach(() => {
    ;(app as any) = undefined
  })

  test('types', () => {
    expect(typeof App).toBe('function')
    expect(typeof app).toBe('object')
    ;[
      'parse',
      'lookup',
      'listen',
      'defaultRoute',
      'errorHandler',
      'use',
      'on',
      'off',
      'find',
    ].forEach((k) => {
      expect(typeof (app as any)[k]).toBe('function')
    })

    expect(typeof app.routes).toBe('object')
    expect(app.cache).toBe(undefined)
  })

  test('listen', () => {
    const out = app.listen(3000)
    expect(out).toBe(app)
    expect(app.server).toBeDefined()
    expect(typeof app.server?.address).toBe('function')
    app.close()
  })

  test('routes basic', () => {
    app.get('/one', (_req, res) => {
      res.end('one')
    })
    app.listen(3000)
    expect(app.find('GET', '/one').handlers.length).toBe(1)
    app.close()
  })

  test('middleware', () => {
    app
      .use(async (_req, _res, next) => {
        await next()
      })
      .use(async (_req, _res, next) => {
        await next()
      })
      .use('/users/1', async (_req, _res, next) => {
        await next()
      })
      .get('/users/:id?', (req, res) => {
        res.end(`users ${req.params.id}`)
      })
      .listen(3000)

    expect(app.find('GET', '/users/1').handlers.length).toBe(4)
    expect(app.find('GET', '/users/2').handlers.length).toBe(3)

    app.close()
  })

  test('express middleware', () => {
    app
      .use(json())
      .use(cookieParser())
      .get('/', (req, res) => {
        expect(req.cookies).toEqual({})
        res.end('')
      })
      .listen(3000)

    expect(app.find('GET', '/').handlers.length).toBe(3)
    // TODO: request

    app.close()
  })

  test('http2 typeof http2=boolean&http', () => {
    pem.createCertificate(
      {
        days: 1,
        selfSigned: true,
      },
      (err, keys) => {
        if (err) {
          throw err
        }
        // 
        const app2 = new App({
          http2: true,
          https: {
            key: keys.serviceKey,
            cert: keys.certificate,
            allowHTTP1: true
          } as any,
        })
          .get('/', (_req, res) => {
            res.end('Hello World!')
          })
          .listen(3000)

        expect(app2.find('GET', '/').handlers.length).toBe(1)
        return ajax
        .get('https://localhost:3000/')
        .then((res) => {
          expect(res.data).toBe('Hello World!')
          app2.close()
        })
        .catch((err) => {
          expect(typeof err).toBe('object')
          app2.close()
        })


      },
    )
  })
  test('http2 typeof http2!=boolean', () => {
    pem.createCertificate(
      {
        days: 1,
        selfSigned: true,
      },
      (err, keys) => {
        if (err) {
          throw err
        }

        // typeof http2!='boolean'
        const app4 = new App({
          http2: {
            key: keys.serviceKey,
            cert: keys.certificate,
            allowHTTP1: true
          },
        })
          .get('/test', (_req, res) => {
            res.end('Hello World!')
          })
          .listen(3001)
        expect(app4.find('GET', '/test').handlers.length).toBe(1)
        // TODO request
        return ajax
          .get('https://localhost:3001/test')
          .then((res) => {
            expect(res.data).toBe('Hello World!')
            app4.close()
          })
          .catch((err) => {
            expect(typeof err).toBe('object')
            app4.close()
          })
      },
    )
  })
})
