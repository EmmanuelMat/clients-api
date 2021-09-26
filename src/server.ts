import express, { Application } from 'express';
import morgan from 'morgan';

const app: Application = express();

app.use(express.json())

app.use(morgan('tiny'))


const port: any = process.env.PORT || 3000

app.listen(port, () => console.log(`listening in port ${port}`));