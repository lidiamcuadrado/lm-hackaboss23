// Módulo HTTP
const http = require('node:http')

// Creamos el servidor
const server = http.createServer()

const bodyParser = (request) => {
  return new Promise((resolve) => {
    const currentBody = []

    request.on('data', (chunk) => {
      currentBody.push(chunk)
    })

    request.on('end', () => {
      const body = Buffer.concat(currentBody).toString()
      resolve(body)
    })
  })
}

// Petición y respuesta
// server.on('request', (request, response) => {
//   response.end('Hola Mundo!')
// })

server.on('request', async (request, response) => {
  const { method, url, headers } = request
  console.log({ method, url, headers })

  if (method === 'GET' && url === '/form') {
    response.setHeader('Content-Type', 'text/html')
    response.end(`<form method="POST">
    <input type="text" name="nombre" />
    <button type="submit">Enviar</button>
  </form>`)
  } else {
    const body = await bodyParser(request)
    console.log(body)
    response.end('Hola Mundo!')
  }
})

if (method === 'GET' && url === '/form') {
  response.end(`<form method="POST">
  <input type="text" name="nombre" />
  <button type="submit">Enviar</button>
</form>`)
} else {
  response.end('Hola Mundo!')
}
// Levantamos el servidor (3000 es el puerto)
server.listen(3000, () =>
  // Callback console log contenido
  console.log('Servidor funcionando en: http://localhost:3000')
)

// Request y response son objetos los dos
// Request es la información que nos llega con la información del cliente
