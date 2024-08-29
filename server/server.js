import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import dbConnect from './config/mongoose.config.js';
import patternRouter from './routes/pattern.routes.js';

const app = express();

app.use(express.json(), cors());
app.use("/api", patternRouter);

dotenv.config();

dbConnect();

const PORT = process.env.PORT;

app.listen(PORT, () =>
    console.log(`Listening on port: ${PORT}`)
);