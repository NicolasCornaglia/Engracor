let express = require('express');
let app = express();
const PORT = 3000;
const path = require('path');
const publicPath = path.resolve(__dirname, "./src/public");
const routes = require("./src/routes/routes");

// Middlewares
app.use(express.static(publicPath));
app.use(express.json());

//Template Engine
app.set('view engine', 'ejs');
app.set("views", path.resolve(__dirname, "./src/views"));
app.use('/', routes);

// Server
app.listen(PORT, () => {
   console.log(`Servidor funcionando en el puerto ${PORT}`);
});

