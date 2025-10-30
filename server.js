//Corazon de express
//const { Worker } = require('worker_threads');
import workerThreads from 'worker_threads';
// Importar el módulo de Express
import express from "express";
import cors from "cors";
// Crear una instancia de la aplicación Express
const app = express();
// Middleware para poder procesar datos en formato JSON
app.use(express.json());
app.use(cors());

app.get('/api/heavy-task', (req, res) => {
    const worker = new Worker(path.join(__dirname, 'worker.js'));
    worker.on('message', resultado => {
        res.send(`Resultado: ${resultado}`);
    });
    worker.on('error', err => {
        res.status(500).send('Error en el worker: ' + err.message);
    });
});
const { parentPort } = require('worker_threads');
let sum = 0;
for (let i = 0; i < 1e9; i++) sum += i;
parentPort.postMessage(sum);
// Definir una ruta básica (endpoint) de prueba
app.get("/", (req, res) => {
    res.send("🚀 Servidor Express funcionando bien");
});
app.get('/bloqueo', (req, res) => {
    let sum = 0;
    for (let i = 0; i < 1e99; i++) sum += i;
    res.send(`Resultado: ${sum}`);
});
app.get("/hola", (req, res) => {
    res.send("hola hola");
});

app.get('/mi', (req, res) => {
    res.send('Bienvenido a mi API REST');
});
// Ruta GET
app.get('/', (req, res) => {
    res.send('Bienvenido a mi API REST');
});
// Ruta POST
app.post('/nuevo', (req, res) => {

    const nombre = req.nombre;
    const apellido = req.apellido1;
    res.send('Has hecho una petición POST');
});
// Ruta PUT
app.put('/actualizar', (req, res) => {
    res.send('Has hecho una petición PUT');
});
// Ruta DELETE
app.delete('/borrar', (req, res) => {
    res.send('Has hecho una petición DELETE');
});
// Escuchar en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});

// Respuesta con texto
app.get('/saludo', (req, res) => {
    res.send('Hola desde la API');
});
// Respuesta con JSON
app.get('/usuario', (req, res) => {
    let usuarios = [
        { id: 1, nombre: 'Carlos', rol: 'admin' },
        { id: 2, nombre: 'Ana', rol: 'user' },
        { id: 3, nombre: 'Luis', rol: 'editor' }
    ];
    res.json(usuarios);
});

// Ruta con parámetro dinámico
app.get('/usuario/:id/', (req, res) => {
    //const id = req.params.id;

    let usuarios = [
        { id: 1, nombre: 'Carlos', apellido1: 'Basulto', rol: 'admin' },
        { id: 2, nombre: 'Andy', apellido1: 'Jan', rol: 'user' },
        { id: 3, nombre: 'Fran', apellido1: 'Mejias', rol: 'Delegado' }
    ];
    /*
    if (usuario.id == req.params.id) {
        
        
    }else{
        res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }*/
    //res.json(usuario);
    res.json(usuarios[req.params.id - 1]);
});
// Definir el puerto donde escuchará el servidor
const PORT = 3000;
// Iniciar el servidor y escuchar peticiones en el puerto definido
app.listen(PORT, () => {
    console.log(`✅ Servidor en ejecución: http://localhost:${PORT}`);
});