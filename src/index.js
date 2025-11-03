const { app, initDb } = require('./app');
const PORT = process.env.PORT || 4000;

initDb().then(() => {
  app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
}).catch(err => {
  console.error('Conexion a la DB fallida', err);
  process.exit(1);
});
