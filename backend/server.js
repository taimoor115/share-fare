import http from "http";
import app from "./app.js";

const server = http.createServer(app);

server.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});
