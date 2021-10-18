import express from 'express';
import todosRoutes from './javascript/todos';


const app = express();
const PORT = 5000;


app.use(express.json());

app.use('/todos', todosRoutes);

app.get('/', (req, res) => res.send('Hello from homepage'));

app.listen(PORT, () => console.log(`server running on port: http://localhost:${PORT}`));

