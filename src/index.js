import app from './app.js'

app.listen(app.get('port'))

console.log('Corriendo aplicacion de autenticacion en: ', app.get('port'))