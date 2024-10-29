import express from 'express';
import connectDB from './config/db.js'
import expeditionRouter from './routers/expeditionRouter.js';
import explorerRouter from './routers/explorerRouter.js';
import speciesRouter from './routers/speciesRouter.js';

connectDB();

const app = express();
app.use(express.json());


app.use('/Expedition', expeditionRouter)
app.use('/Explorer', explorerRouter);
app.use('/Species', speciesRouter)


app.listen(process.env.PORT, () => console.log('Server running on port 3000'));
