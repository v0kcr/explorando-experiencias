import "dotenv/config";
import express from "express";
import path from "node:path";
import { createApp } from "./server/app";

const app = createApp();
const staticPath = path.join(process.cwd(), "dist", "public");

app.use(express.static(staticPath));
app.use("*", (_req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

export default app;
