import express from 'express';
import path from 'path';

const PORT = process.env.PORT || 4000
const app = express();

const allProducts = [
    {
        name: "product1",
        price: 123
    },
    {
        name: "product2",
        price: 444
    }
]

//your all the other codes

//These are required if using type as module in package.json in server code
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



// Have Node serve the files for our built React app
const reactBuildPath = path.resolve(__dirname, '../front-end/build')
app.use(express.static(reactBuildPath));

app.get('/api/products', (req, res) => {
    res.json(allProducts)
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../front-end/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

//Run app, then load http://localhost:port in a browser to see the output.