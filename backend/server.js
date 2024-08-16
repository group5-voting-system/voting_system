// const express = require("express");

// const app = express();

// const PORT = 5000;
// const cors = require("cors");
// const contactFormRoutes = require("./routes/contactFormRoutes");

// const bodyParser = require("body-parser");

// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.json());

// app.use("/api", contactFormRoutes);


// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


const express = require("express");
const cors = require("cors");
const knex = require("knex")(require("./knexfile").development);


const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const ChatRoutes = require("./routes/contactFormRoutes");
app.use("/api", ChatRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});