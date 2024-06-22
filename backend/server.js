require("dotenv").config();
require("express-async-errors");
const cors = require("cors");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(cors());
app.use(cookieParser());
app.use(express.json());
const connectDB = require("./db/connect");

const authRouter = require("./routes/auth");
const messageRouter = require("./routes/message");
const userRouter = require("./routes/user");

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/messages", messageRouter);
app.use("/api/v1/users", userRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
