import express from "express";
//import { config } from "dotenv";
import userRouter from "./routes/users";
import cardRouter from "./routes/cards";
import notFound from "./middleware/notFound";
import { connect } from "./DB/utils/connection";
import { logger } from "./middleware/logger";
import { configEnv } from "./environment";

configEnv();
connect();

const app = express();
app.use(express.json());

app.use(express.static("public"));

app.use(logger);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/cards", cardRouter);
app.use(notFound);

const PORT = process.env.EXPRESS_PORT;

app.listen(PORT, () => {
  console.log(`Server is running on:http://localhost:${PORT}`);
});
