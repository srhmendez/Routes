import express from 'express';



let todos = [
    {
        "id": 1,
        "name": "Go to work",
        "complete": false,
        "category": "Work"
    },
    {
        "id": 2,
        "name": "Go to school",
        "complete": false,
        "category": "School"
    },
    {
        "id": 3,
        "name": "Go to the dentist",
        "complete": false,
        "category": "Health Care"
    },
    {
        "id": 4,
        "name": "Go to the gym",
        "complete": false,
        "category": "Health"
    }
]


const router = express.Router();


//all routes are starting with /todos


router.get('/', (req, res) => {
    res.send(todos);
})
router.post('/', (req, res) => {
    let newTodo = req.body
    todos.push(newTodo);
    res.send(todos)
})
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    todos = todos.filter((todo) => todo.id != id);
    res.send(`user with the id: ${id} was deleted from Database`)  
})
router.put('/', (req, res) => {
    let editedTodo = req.body;
    const id = editedTodo.id;
    let indexOfTodo = todos.reduce((prev,curr,acc) => { if (curr.id === id) {
        return acc
    }});
    todos.splice(indexOfTodo, 1)
    todos.push(editedTodo)
    res.send(todos)
})


//categories endpoints
const categories = [];

router.get('/categories', (req, res) => {
    todos.filter((todo)=> categories.push(todo.category));
    let setCats = new Set(categories);
    let catsArrayNoDuplicates = [...setCats]
    res.send(catsArrayNoDuplicates);
})


router.post('/categories', (req, res) => {

    router.get('/categories', (req, res) => {
        todos.filter((todo)=> categories.push(todo.category));
        let setCats = new Set(categories);
        let catsArrayNoDuplicates = [...setCats]
        res.send(catsArrayNoDuplicates);
    })
    let input = req.body;
    categories.push(input.category)
    let setCats = new Set(categories);
    let catsArrayNoDuplicates = [...setCats]
    res.send(catsArrayNoDuplicates);
    res.send(categories)
})

export default router