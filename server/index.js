const express = require("express");
const cors = require("cors");
const path = require("path");
const PORT = 8080;
const app = express();
const rowRouter = require("./routes/row.routes");

app.use(cors());
app.use(express.json());
app.use("/api", rowRouter);
app.use(express.static(path.join(__dirname, "build")));
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
