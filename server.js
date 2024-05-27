// server.js

const express = require('express');
const { vehiculos } = require('./Vehiculos'); // Importar la lista de juegos desde vehiculos.js
const app = express();
const port = 3000;


// Ruta para obtener todos los juegos
app.get('/api/vehiculos', (req, res) => {
     res.json({
        ok:true,
        vehiculos,
        statusCode:200
     });
});




// Ruta para obtener detalles de un juego específico por su ID
// app.get('/api/games/:id', (req, res) => {
//     const gameId = parseInt(req.params.id);
//     const game = games.find(game => game.id === gameId);
//     if (!game) {
//         res.status(404).json({ message: 'Juego no encontrado' });
//     } else {
//         res.json(game);
//     }
// });

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});


//http://localhost:3000