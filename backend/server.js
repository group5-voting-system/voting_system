const express = require("express");
const app = express();
const candidateRequestRoutes = require("./routes/candidateRequests");
const localListRoutes = require("./routes/localLists");
const PORT = 5000;
const cors = require("cors");

const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use("/api/candidate-requests", candidateRequestRoutes);
app.use("/api/local-lists", localListRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
