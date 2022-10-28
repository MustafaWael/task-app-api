import express from "express";
import { userRouter, taskRouter } from "./routes/index.js";

// Express App Instence
const app = express();

// App Middlewares
app.use(express.json())

// App Routers
app.use(userRouter);
app.use(taskRouter);

// Export Express App Instence
export default app;
