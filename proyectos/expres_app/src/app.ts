import express, { Request, Response, NextFunction, response } from "express";
import todoRoutes from "./routes/todos";
import { json } from "body-parser";
import bodyParser from "body-parser";
const app = express();

app.listen(3000);
app.use(json());
app.use("/todos", todoRoutes);
app.use((err: Error, req: Request, resp: Response, next: NextFunction) => {
  resp.status(500).json({ message: err.message });
});
