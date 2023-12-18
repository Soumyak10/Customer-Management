import express from "express";
import mongoose from "mongoose";
import { createCustomer, getCustomerList } from "./controllers.js";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "client", "dist")));

app.use(express.json());
app.use(cors());

mongoose
    .connect(process.env.MONGO)
    .then(() => console.log("Connected To MongoDB"))
    .catch((err) => console.log(err));

app.listen(3000, () => {
    console.log(`Server is running on port ${3000}`);
});

app.post("/api/createCustomer", createCustomer);
app.get("/api/getCustomerList", getCustomerList);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});
