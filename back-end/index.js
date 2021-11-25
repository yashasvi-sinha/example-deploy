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
const buildFolderPath = `I:/Projects/AttainU/example-deploy/front-end/build`
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