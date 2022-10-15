import express from "express";
import cors from "cors";
import { dbInitialize } from "./db.js";
import routes from "./routes/index.js";


dbInitialize().then((result)=>console.log("connection to db successfully done.")).catch(e => console.log("error while connecting to db",e));

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

routes(app);

export default app;