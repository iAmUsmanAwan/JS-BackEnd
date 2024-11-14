import express from 'express';

const app = express();

const port = 3000;

// app.get('/', (req, res) => {
//     res.send('Hello, From The Dictator!');
// });
// app.get('/ice-tea', (req, res) => {
//     res.send('What type of ice tea do you want?');
// });
// app.get('/another', (req, res) => {
//     res.send('Another route! :D');
// });

app.use(express.json());

let teaData = [];
let nextId = 1;

//? add a new tea item
app.post('/teas', (req, res) => {
    const {name, price} = req.body;
    const newTea = {id: nextId++, name, price};
    teaData.push(newTea);
    res.status(201).send(newTea);
}) 

//? get all tea items
app.get('/teas', (req, res) => {
    res.status(200).send(teaData);
});

//? get a specific tea item by id
app.get('/teas/:id', (req, res) => {
    const tea = teaData.find(t => t.id === parseInt(req.params.id))
    if(!tea) {
        return res.status(404).send('Tea not found');
    }
    res.status(200).send(tea);
});

//? update a specific tea item by id
app.put('/teas/:id', (req, res) => {
    const tea = teaData.find(t => t.id === parseInt(req.params.id));
    if(!tea) {
        return res.status(404).send('Tea not found');
    }
    const {name, price} = req.body;
    tea.name = name;
    tea.price = price;
    res.status(200).send(tea);
});

//? delete a specific tea item by id

app.delete('/teas/:id', (req, res) => {
    // console.log("Delete");
    // console.log(req.params.id);
    
    const index = teaData.findIndex((t) => t.id === parseInt(req.params.id));
    if(!index) {
        return res.status(404).send('Tea not found');
    }
    teaData.splice(index, 1);
    res.status(204).send('Deleted !');
});

app.listen(port, () => {
    console.log(`server running at port: ${port} ...��`);
    
});