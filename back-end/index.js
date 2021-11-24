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


app.get('/api/products', (req, res) => {
    res.json(allProducts)
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

//Run app, then load http://localhost:port in a browser to see the output.