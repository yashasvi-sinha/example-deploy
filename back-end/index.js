import express from 'express';

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

//this are required only if using type as module in package.json in server code
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

// console.log(`🚀 ~ import.meta.url`, import.meta.url)
const __fileName = fileURLToPath(import.meta.url)
const __dirname = dirname(__fileName)
console.log(`🚀 ~ __dirname`, __dirname)


const buildFolderPath = resolve(__dirname, '../front-end/build') 
console.log(`🚀 ~ buildFolderPath`, buildFolderPath)

app.use(express.static(buildFolderPath))


app.get('/api/products', (req, res) => {
    res.json(allProducts)
});

//React router
app.get("*", (req, res) => {
    res.sendFile(`${buildFolderPath}/index.html`)
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

//Run app, then load http://localhost:port in a browser to see the output.