const express = require("express");
const app = express();
const votingRoutes = require('./routes/votingRoutes');



const PORT = 5000;
const cors = require("cors");

const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use('/voting', votingRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

